export interface IUser {
  fullName?: string;
  username?: string;
  email?: string;
  avatar?: string;
}

export interface RegisterUserType {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

export interface LoginUserType {
  email: string;
  password: string;
}

export interface EditUserDetailsType {
  fullName: string;
  username: string;
  email: string;
}
