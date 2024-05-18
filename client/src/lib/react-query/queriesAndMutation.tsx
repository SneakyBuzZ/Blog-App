import { useMutation } from "@tanstack/react-query";
import {
  editUserAvatar,
  editUserDetails,
  loginUser,
  logoutUser,
  registerUser,
} from "../api/api";
import { EditUserDetailsType, LoginUserType, RegisterUserType } from "../types";

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
