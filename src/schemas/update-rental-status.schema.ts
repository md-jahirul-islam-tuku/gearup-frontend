import { z } from "zod";

export const updateRentalStatusSchema = z.object({
  status: z.enum(["CONFIRMED", "PICKED_UP", "RETURNED"]),
});

export type UpdateRentalStatusPayload = z.infer<
  typeof updateRentalStatusSchema
>;
