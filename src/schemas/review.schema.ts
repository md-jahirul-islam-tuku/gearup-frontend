import { z } from "zod";

export const reviewSchema = z.object({
  comment: z
    .string({
      error: "Comment is required",
    })
    .trim()
    .min(10, "Comment must be at least 10 characters")
    .max(500, "Comment cannot exceed 500 characters"),
});

export type ReviewFormValues = z.infer<typeof reviewSchema>;
