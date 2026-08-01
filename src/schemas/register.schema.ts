import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(2, "Name is required"),

    email: z.email("Invalid email address"),

    role: z.enum(["CUSTOMER", "PROVIDER"], {
      message: "Role is required",
    }),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm Password do not match.",
    path: ["confirmPassword"],
  });
