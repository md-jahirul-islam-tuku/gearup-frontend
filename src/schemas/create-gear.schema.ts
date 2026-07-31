import { z } from "zod";

export const createGearSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Gear name must be at least 3 characters")
    .max(100, "Gear name cannot exceed 100 characters"),

  brand: z
    .string()
    .trim()
    .min(2, "Brand must be at least 2 characters")
    .max(50, "Brand cannot exceed 50 characters"),

  description: z
    .string()
    .trim()
    .min(20, "Description must be at least 20 characters")
    .max(1000, "Description cannot exceed 1000 characters"),

  pricePerDay: z.coerce.number().min(1, "Price per day must be greater than 0"),

  stock: z.coerce
    .number()
    .int("Stock must be a whole number")
    .min(0, "Stock cannot be negative"),

  categoryId: z.string().min(1, "Please select a category"),

  images: z
    .array(z.string().trim().url("Please enter a valid image URL"))
    .min(1, "At least one image is required")
    .max(4, "Maximum 4 images allowed"),
});

export type CreateGearPayload = z.infer<typeof createGearSchema>;
