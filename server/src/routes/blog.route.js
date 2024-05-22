import { Router } from "express"
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { createBlog, deleteBlogById, editBlog, getAllBlogs, getBlogBySlug, getBlogsCount, getUserBlogsCount, getUserBlogs, uploadImageFile } from "../controllers/blog.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const blogRouter = Router();

blogRouter.route("/upload-imageFile").post(verifyJwt, upload.single('imageFile'), uploadImageFile)

blogRouter.route("/create-blog").post(verifyJwt, createBlog)

blogRouter.route("/edit-blog/:blogId").put(verifyJwt, editBlog)

blogRouter.route("/delete-blog/:blogId").delete(verifyJwt, deleteBlogById)

blogRouter.route("/get-allBlogs").get(getAllBlogs)

blogRouter.route("/get-allBlogCount").get(getBlogsCount)

blogRouter.route("/get-userBlogs").get(verifyJwt, getUserBlogs)

blogRouter.route("/get-userPostCount").get(verifyJwt, getUserBlogsCount)

blogRouter.route("/get-bySlug/:slug").get(getBlogBySlug)

export default blogRouter