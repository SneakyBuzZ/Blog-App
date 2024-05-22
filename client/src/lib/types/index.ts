//################# USER #################
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

//################# blog #################

export interface CreateBlogType {
  title: string;
  description: string;
  content: string;
  imageFile: string;
}
export interface EditBlogType {
  title: string;
  description: string;
  content: string;
  imageFile: string;
  _id: string;
}

export interface AllBlogsType {
  title: string;
  description: string;
  content: string;
  imageFile: string;
  slug: string;
  authorDetails: {
    username: string;
    fullName: string;
    avatar: string;
  };
  createdAt: string;
  updatedAt: string;
  _id: string;
}
export interface AllUserBlogsType {
  _id: string;
  title: string;
  description: string;
  content: string;
  imageFile: string;
  slug: string;
  author: string;
  createdAt: string;
  updatedAt: string;
}
