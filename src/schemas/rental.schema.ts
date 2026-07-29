import { z } from "zod";

export const rentalSchema = z
  .object({
    gearItemId: z.string().uuid("Invalid gear id"),

    quantity: z
      .number({
        error: "Quantity is required",
      })
      .min(1, "Minimum quantity is 1"),

    startDate: z.string().min(1, "Start date is required"),

    endDate: z.string().min(1, "End date is required"),
  })
  .refine((data) => new Date(data.endDate) >= new Date(data.startDate), {
    path: ["endDate"],
    message: "End date must be after start date",
  });

export type TRentalSchema = z.infer<typeof rentalSchema>;
