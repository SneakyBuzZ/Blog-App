import { useMutation } from "@tanstack/react-query";
import {
  createPost,
  editUserAvatar,
  editUserDetails,
  getAllPosts,
  getPostBySlug,
  getUserDetailsById,
  loginUser,
  logoutUser,
  registerUser,
  uploadPostImageFile,
} from "../api/api";
import {
  CreatePostType,
  EditUserDetailsType,
  LoginUserType,
  RegisterUserType,
} from "../types";

// export const useCreateUserAccountMutation = () => {
//   return useMutation({
//     mutationFn: (user: INewUser) => createUserAccount(user),
//   });
// };
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

export const useUploadPostImageFileQuery = () => {
  return useMutation({
    mutationFn: (formData: FormData) => uploadPostImageFile(formData),
  });
};

export const useCreatePostQuery = () => {
  return useMutation({
    mutationFn: (post: CreatePostType) => createPost(post),
  });
};

export const useGetAllPostQuery = () => {
  return useMutation({
    mutationFn: () => getAllPosts(),
  });
};

export const useGetUserDetailsQuery = () => {
  return useMutation({
    mutationFn: (userId: string) => getUserDetailsById(userId),
  });
};

export const useGetPostBySlug = () => {
  return useMutation({
    mutationFn: (slug: string) => getPostBySlug(slug),
  });
};
