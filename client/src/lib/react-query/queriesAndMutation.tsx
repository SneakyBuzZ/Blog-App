import { useMutation } from "@tanstack/react-query";

import {
  CreateBlogType,
  EditUserDetailsType,
  LoginUserType,
  RegisterUserType,
} from "../types";
import {
  editUserAvatar,
  editUserDetails,
  getUserDetailsById,
  loginUser,
  logoutUser,
  registerUser,
} from "../api/userApi";
import {
  createBlog,
  getAllBlogs,
  getBlogBySlug,
  getUserBlogs,
  uploadPostImageFile,
} from "../api/blogApi";

// ############################# USER #############################

export const useRegisterUserQuery = () => {
  return useMutation({
    mutationFn: (userValues: RegisterUserType) => registerUser(userValues),
  });
};

export const useLoginUserQuery = () => {
  return useMutation({
    mutationFn: (userValues: LoginUserType) => loginUser(userValues),
  });
};

export const useLogoutUserQuery = () => {
  return useMutation({
    mutationFn: () => logoutUser(),
  });
};

export const useEditUserDetailsQuery = () => {
  return useMutation({
    mutationFn: (userValues: EditUserDetailsType) =>
      editUserDetails(userValues),
  });
};

export const useEditUserAvatarQuery = () => {
  return useMutation({
    mutationFn: (formData: FormData) => editUserAvatar(formData),
  });
};

// ############################# BLOG #############################

export const useUploadBlogImageFileQuery = () => {
  return useMutation({
    mutationFn: (formData: FormData) => uploadPostImageFile(formData),
  });
};

export const useCreateBlogQuery = () => {
  return useMutation({
    mutationFn: (post: CreateBlogType) => createBlog(post),
  });
};

export const useGetAllBlogsQuery = () => {
  return useMutation({
    mutationFn: () => getAllBlogs(),
  });
};

export const useGetUserDetailsQuery = () => {
  return useMutation({
    mutationFn: (userId: string) => getUserDetailsById(userId),
  });
};

export const useGetBlogsBySlug = () => {
  return useMutation({
    mutationFn: (slug: string) => getBlogBySlug(slug),
  });
};

export const useGetUserBlogs = () => {
  return useMutation({
    mutationFn: () => getUserBlogs(),
  });
};
