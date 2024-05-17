import { z } from "zod";

const RegisterSchema = z.object({
  fullName: z.string().min(4, { message: "name must be atleast 4 characters" }),
  username: z
    .string()
    .min(4, { message: "username must be atleast 4 characters" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

const EditProfileSchema = z.object({
  fullName: z.string().min(4, { message: "name must be atleast 4 characters" }),
  username: z
    .string()
    .min(4, { message: "username must be atleast 4 characters" }),
  email: z.string().email(),
  avatar: z.string().optional(),
});

const LoginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be atleast 8 characters" }),
});

export { RegisterSchema, LoginSchema, EditProfileSchema };
