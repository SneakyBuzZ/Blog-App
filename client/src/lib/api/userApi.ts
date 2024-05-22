import axios from "axios";
import { EditUserDetailsType, LoginUserType, RegisterUserType } from "../types";
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

export const editUserDetails = async (userValues: EditUserDetailsType) => {
  const response = await axios.patch(
    "/expresswave/api/users/update-account",
    userValues
  );
  await delay(2000);
  return response?.data?.data;
};

export const logoutUser = async () => {
  await axios.post("/expresswave/api/users/logout");
  return;
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

export const getAllUserCount = async () => {
  const response = await axios.get(`/expresswave/api/users/get-allUserCount`);
  return response?.data?.data;
};
