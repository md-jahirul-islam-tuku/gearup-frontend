import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),

  profileImage: z
    .string()
    .trim()
    .url("Please enter a valid image URL")
    .or(z.literal(""))
    .optional(),
});

export type UpdateProfilePayload = z.infer<typeof updateProfileSchema>;
