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

export interface CreatePostType {
  title: string;
  content: string;
  location: string;
  imageFile: string;
  category: string;
}

export interface AllPostsType {
  _id: string;
  title: string;
  content: string;
  imageFile: string;
  location: string;
  category: string;
  slug: string;
  owner: string;
  ownerAvatar: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
