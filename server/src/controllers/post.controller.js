import mongoose from "mongoose";
import { Post } from "../models/post.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

export const createPost = asyncHandler(async (req, res) => {
    const { fullName, avatar } = req.user;
    const { content, location, category, title, imageFile } = req.body

    if ([content, title, imageFile].some((eachItem) => eachItem?.trim() === "")) {
        throw new ApiError(400, "All fields are required")
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9\s]/g, '').replace(/\s+/g, '-');

    const newPost = await Post.create({
        title,
        content,
        imageFile,
        location,
        category,
        slug,
        owner: fullName,
        ownerAvatar: avatar,
    })

    if (!newPost) throw new ApiError(500, "Post is failed to be created");

    return res.status(201).json(
        new ApiResponse(200, newPost, "Post created successfully")
    )
})

export const uploadPostImageFile = asyncHandler(async (req, res) => {
    const imageFileLocalPath = req.file?.path;
    if (!imageFileLocalPath) throw new ApiError(401, "imageFile is missing");

    const imageFile = await uploadOnCloudinary(imageFileLocalPath);
    if (!imageFile) throw new ApiError(500, "Failed to upload image file");

    return res.status(200).json(
        new ApiResponse(200, { url: imageFile.url }, "Image uploaded successfully")
    )
})

// export const getUserPosts = asyncHandler(async (req, res) => {
//     const { pageNo = 1, limit = 10, sortBy = "createdAt", sortType = "desc" } = req.query;
//     const userFullName = req.user.fullName;
//     const sort = {};
//     sort[sortBy] = sortType.toLowerCase() === "asc" ? 1 : -1;

//     const filter = {
//         owner: userFullName
//     }

//     const pageNum = parseInt(pageNo, 10)
//     const limitNum = parseInt(limit, 10)

//     const allUserPosts = await Post.find(filter)
//         .sort(sort)
//         .skip((pageNum - 1) * limitNum)
//         .limit(limit)

//     if (!allUserPosts) throw new ApiError(200, "Failed to find posts");

//     const totalPosts = allUserPosts.length
//     return res.status(200).json(
//         new ApiResponse(200, { allUserPosts, totalPosts, page: pageNum, limit: limitNum }, "Posts fetched successfully")
//     )
// });

export const getAllPosts = asyncHandler(async (req, res) => {
    const allPosts = await Post.find();
    if (!allPosts) throw new ApiError(500, "Failed to fetch posts");

    const totalPosts = allPosts.length

    return res.status(200).json(
        new ApiResponse(200, { allPosts, totalPosts }, "Posts fetched successfully")
    )
});

export const deletePostById = asyncHandler(async (req, res) => {
    const { postId } = req.params;

    const post = await Post.findByIdAndDelete(postId)
    console.log("DELETED POST : ", post)

    return res.status(200).json(
        new ApiResponse(200, "Post deleted successfully")
    )
})

export const getPostBySlug = asyncHandler(async (req, res) => {
    const { slug } = req.params;
    const post = await Post.findOne({ slug });
    if (!post) throw new ApiError(404, "Post not found");
    return res.status(200).json(
        new ApiResponse(200, post, "Post fetched successfully")
    )
})



export const getUserPosts = asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, sortBy = "createdAt", sortType = "asc" } = req.query

    const sortKey = sortType === "asc" ? 1 : -1;
    const sort = {}
    sort[sortBy] = Number(sortKey)

    const allPosts = await Post.aggregate([
        {
            $match: {
                category: "Nature"
            }
        },
        {
            $sort: sort
        },
        {
            $lookup: {
                from: "users",
                localField: "owner",
                foreignField: "_id",
                as: "owner"
            }
        },
        {
            $lookup: {
                from: "users",
                localField: "ownerAvatar",
                foreignField: "avatar",
                as: "ownerAvatar"
            }
        },
        {
            $project: {
                title: 1,
                content: 1,
                imageFile: 1,
                location: 1,
                category: 1,
                slug: 1,
                owner: 1,
                ownerAvatar: "hahahahaha",
                createdAt: 1,
                updatedAt: 1
            }
        }
    ])

    if (!allPosts) throw new ApiError(500, "Aggregation pipeline failed to get all posts")

    const options = {
        page: parseInt(page, 1),
        limit: parseInt(limit, 10)
    }

    const paginatedPosts = await Post.aggregatePaginate(allPosts, options)

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                paginatedPosts.docs,
                "Posts fetched successfully"
            )
        )

})

// const getOwnerVideos = asyncHandler(async (req, res) => {



//     const allOwnerVideos = await Video.aggregate([
//         {
//             $match: {
//                 owner: new mongoose.Types.ObjectId(userId)
//             }
//         },
//         {
//             $sort: sort
//         },
//         {
//             $lookup: {
//                 from: "users",
//                 localField: "owner",
//                 foreignField: "_id",
//                 as: "owner"
//             }
//         },
//         {
//             $project: {
//                 title: 1,
//                 description: 1,
//                 owner: 1,
//                 videoFile: 1,
//                 thumbnail: 1,
//                 duration: 1,
//                 isPublished: 1,
//             }
//         }
//     ])

//     if (!allOwnerVideos) throw new ApiError(500, "Aggregation pipeline failed for owner videos")

//     const options = {
//         page: parseInt(page, 1),
//         limit: parseInt(limit, 10)
//     }

//     const paginatedOwnVideos = await Video.aggregatePaginate(allOwnerVideos, options)

//     return res
//         .status(200)
//         .json(
//             new ApiResponse(
//                 200,
//                 paginatedOwnVideos.docs,
//                 "Owner vidoes fetched successfully"
//             )
//         )

// })




