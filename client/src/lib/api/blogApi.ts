import axios from "axios";
import { CreateBlogType, EditBlogType } from "../types";
import { delay } from "../utils";

export const uploadPostImageFile = async (formData: FormData) => {
  const response = await axios.post(
    "/expresswave/api/blogs/upload-imageFile",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data.data.url;
};

export const createBlog = async (post: CreateBlogType) => {
  const response = await axios.post("/expresswave/api/blogs/create-blog", post);
  await delay(2000);
  return response?.data;
};

export const editBlog = async (blog: EditBlogType) => {
  const response = await axios.put(
    `/expresswave/api/blogs/edit-blog/${blog._id}`,
    {
      title: blog.title,
      description: blog.description,
      content: blog.content,
      imageFile: blog.imageFile,
    }
  );
  await delay(2000);
  return response;
};

export const deleteBlog = async (id: string) => {
  const response = await axios.delete(
    `/expresswave/api/blogs/delete-blog/${id}`
  );
  await delay(1000);
  return response;
};

export const getAllBlogs = async () => {
  const response = await axios.get("/expresswave/api/blogs/get-allBlogs");
  await delay(700);
  return response?.data?.data?.allBlogs;
};

export const getBlogBySlug = async (slug: string) => {
  const response = await axios.get(`/expresswave/api/blogs/get-bySlug/${slug}`);
  return response?.data?.data;
};

export const getUserBlogs = async () => {
  const response = await axios.get("/expresswave/api/blogs/get-userBlogs");
  await delay(700);
  return response?.data?.data;
};

export const getAllBlogsCount = async () => {
  const response = await axios.get("/expresswave/api/blogs//get-allBlogCount");
  return response?.data?.data;
};

export const getUserBlogsCount = async () => {
  const response = await axios.get(`/expresswave/api/blogs/get-userPostCount`);
  return response?.data?.data;
};
