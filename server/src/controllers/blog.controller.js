import { Blog } from "../models/blog.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const uploadImageFile = asyncHandler(async (req, res) => {
    const imageFileLocalPath = req.file?.path;
    if (!imageFileLocalPath) throw new ApiError(401, "imageFile is missing");

    const imageFile = await uploadOnCloudinary(imageFileLocalPath);
    if (!imageFile) throw new ApiError(500, "Failed to upload image file");

    return res.status(200).json(
        new ApiResponse(200, { url: imageFile.url }, "Image uploaded successfully")
    )
})

export const createBlog = asyncHandler(async (req, res) => {
    const author = req.user?._id;
    const { title, description, content, imageFile } = req.body

    if ([content, title, imageFile].some((eachItem) => eachItem?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    const slug = title?.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');

    const newBlog = await Blog.create({
        title,
        description,
        content,
        imageFile,
        slug,
        author,
    })

    if (!newBlog) throw new ApiError(500, "Failed to create blog");

    return res.status(201).json(
        new ApiResponse(200, newBlog, "Post created successfully")
    )
})

export const editBlog = asyncHandler(async (req, res) => {
    const { blogId } = req.params;
    const { title, description, content, imageFile } = req.body

    if ([content, title, imageFile].some((eachItem) => eachItem?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    const Editedblog = await Blog.findByIdAndUpdate(
        blogId,
        {
            $set: {
                title,
                description,
                content,
                imageFile,
            }
        },
        {
            new: true
        }
    )

    if (!Editedblog) throw new ApiError(404, "Blog not found");

    return res.status(200).json(
        new ApiResponse(200, Editedblog, "Blog updated successfully")
    )
})

export const deleteBlogById = asyncHandler(async (req, res) => {
    const { blogId } = req.params;

    await Blog.findByIdAndDelete(blogId)
    return res.status(200).json(
        new ApiResponse(200, "Blog deleted successfully")
    )
})

export const getAllBlogs = asyncHandler(async (req, res) => {

    const allBlogs = await Blog.aggregate([
        {
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "_id",
                as: "authorDetails",
            },
        },
        {
            $addFields: {
                "authorDetails": {
                    $first: "$authorDetails"
                }
            },
        },
        {
            $project: {
                "authorDetails.password": 0,
                "authorDetails.createdAt": 0,
                "authorDetails.__v": 0,
                "authorDetails.refreshToken": 0,
                "authorDetails._id": 0,
                "authorDetails.email": 0,
                "authorDetails.updatedAt": 0,
                "__v": 0,
                "_id": 0,
                "author": 0,
            },
        },
        {
            $sort: {
                "createdAt": -1
            }
        }
    ])

    const blogsCount = allBlogs.length;

    return res.status(200).json(
        new ApiResponse(200, { allBlogs, blogsCount }, "Blogs fetched successfully")
    )
});

export const getBlogsCount = asyncHandler(async (req, res) => {
    const blogsCount = await Blog.countDocuments();

    return res.status(200).json(
        new ApiResponse(200, blogsCount, "Blogs count fetched successfully")
    )
})

export const getUserBlogs = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;

    const skipNo = (page - 1) * limit;

    const userBlogs = await Blog.aggregate([
        {
            $match: {
                author: req.user?._id
            }
        },
        {
            $sort: {
                "createdAt": -1
            }
        },
        {
            $skip: skipNo
        },
        {
            $limit: limit
        },
        {
            $project: {
                "__v": 0,
            }
        }
    ])

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                userBlogs,
                "Posts fetched successfully"
            )
        )
})

export const getUserBlogsCount = asyncHandler(async (req, res) => {
    const userId = req.user?._id;

    const blogsCount = await Blog.aggregate([
        {
            $match: {
                author: userId
            }
        },
        {
            $group: {
                _id: null,
                count: {
                    $sum: 1
                }
            }
        }
    ])

    return res.status(200).json(
        new ApiResponse(200, blogsCount[0].count, "Blogs count fetched successfully")
    )
})

export const getBlogBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;

    const blog = await Blog.aggregate([
        {
            $match: {
                slug: slug
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "author",
                foreignField: "_id",
                as: "authorDetails"
            }
        },
        {
            $addFields: {
                "authorDetails": {
                    $first: "$authorDetails"
                }
            },
        },
        {
            $project: {
                "authorDetails.password": 0,
                "authorDetails.createdAt": 0,
                "authorDetails.__v": 0,
                "authorDetails.refreshToken": 0,
                "authorDetails._id": 0,
                "authorDetails.email": 0,
                "authorDetails.updatedAt": 0,
                "__v": 0,
                "_id": 0,
                "author": 0,
            },
        },
    ])

    return res.status(200).json(
        new ApiResponse(200, blog[0], "Blog fetched successfully")
    )
})






