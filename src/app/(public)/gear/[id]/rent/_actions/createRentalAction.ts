"use server";

import { redirect } from "next/navigation";

import { rentalSchema } from "@/schemas/rental.schema";

import { createRental } from "@/services/rental/createRental";

import { getZodErrors } from "@/lib/zod-error";

type RentalState = {
  success: boolean;
  message: string;
  errorDetails?: Record<string, string[]>;
};

export async function createRentalAction(
  prevState: RentalState,
  formData: FormData,
): Promise<RentalState> {
  const payload = {
    gearItemId: formData.get("gearItemId")?.toString() ?? "",
    quantity: Number(formData.get("quantity")),
    startDate: formData.get("startDate")?.toString() ?? "",
    endDate: formData.get("endDate")?.toString() ?? "",
  };

  const validated = rentalSchema.safeParse(payload);

  if (!validated.success) {
    return {
      success: false,
      ...getZodErrors(validated.error),
    };
  }

  const result = await createRental(validated.data);

  if (!result.success) {
    return {
      success: false,
      message: result.message,
    };
  }

  redirect("/dashboard/customer/rentals");
}
