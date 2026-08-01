import { z } from "zod";

export const categorySchema = z.object({
  name: z.string().trim().min(2, "Category name must be at least 2 characters"),

  slug: z.string().trim().min(2, "Slug is required"),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters"),
});

export type CategoryPayload = z.infer<typeof categorySchema>;
