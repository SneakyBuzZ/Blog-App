import axios from "axios";
import {
  RegisterUserType,
  LoginUserType,
  EditUserDetailsType,
  CreatePostType,
} from "../types";
import { delay } from "../utils";

export const registerUser = async (userValues: RegisterUserType) => {
  const response = await axios.post(
    "/expresswave/api/users/register",
    userValues
  );
  await delay(2000);
  return response?.data?.data;
};

export const loginUser = async (userValues: LoginUserType) => {
  const response = await axios.post("/expresswave/api/users/login", userValues);
  await delay(2000);
  return response?.data?.data?.user;
};

export const logoutUser = async () => {
  await delay(2000);
  await axios.post("/expresswave/api/users/logout");
  return;
};

export const editUserDetails = async (userValues: EditUserDetailsType) => {
  const response = await axios.patch(
    "/expresswave/api/users/update-account",
    userValues
  );
  await delay(2000);
  return response?.data?.data;
};

export const editUserAvatar = async (formData: FormData) => {
  const response = await axios.patch(
    "/expresswave/api/users/update-avatar",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  await delay(2000);
  return response.data.data;
};

export const uploadPostImageFile = async (formData: FormData) => {
  const response = await axios.post(
    "/expresswave/api/posts/upload-imageFile",
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data.data.url;
};

export const createPost = async (post: CreatePostType) => {
  const response = await axios.post("/expresswave/api/posts/create-post", post);
  await delay(2000);
  return response?.data;
};

export const getAllPosts = async () => {
  const response = await axios.get("/expresswave/api/posts/get-posts");
  await delay(2000);
  return response?.data?.data?.allPosts;
};

export const getUserDetailsById = async (userId: string) => {
  const params = {
    userId,
  };
  const response = await axios.get(`/expresswave/api/users/get-userById`, {
    params,
  });
  await delay(2000);
  return response?.data?.data;
};
