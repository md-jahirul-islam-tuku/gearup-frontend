import { z } from "zod";

export const updateGearSchema = z.object({
  name: z.string().min(3).optional(),
  brand: z.string().min(2).optional(),
  description: z.string().min(20).optional(),
  pricePerDay: z.coerce.number().positive().optional(),
  stock: z.coerce.number().int().min(0).optional(),
  categoryId: z.string().uuid().optional(),
  images: z.array(z.string().trim().url()).min(1).max(4).optional(),
});

export type UpdateGearPayload = z.infer<typeof updateGearSchema>;
