import { Router } from "express"
import { createPost, deletePostById, getAllPosts, getPostBySlug, getUserPosts, uploadPostImageFile } from "../controllers/post.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";
import { upload } from "../middlewares/multer.middleware.js";

const postRouter = Router();

postRouter.route("/create-post").post(verifyJwt, createPost)

postRouter.route("/get-posts").get(getAllPosts)

postRouter.route("/get-userPosts").get(verifyJwt, getUserPosts)

postRouter.route("/delete-post/:postId").delete(verifyJwt, deletePostById)

postRouter.route("/upload-imageFile").post(verifyJwt, upload.single('imageFile'), uploadPostImageFile)

postRouter.route("/blogpost/:slug").get(getPostBySlug)

export default postRouter