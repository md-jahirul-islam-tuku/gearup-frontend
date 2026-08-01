"use server";

import { ActionState } from "@/types/action";

import {
  updateRentalStatusSchema,
  UpdateRentalStatusPayload,
} from "@/schemas/update-rental-status.schema";

import { updateRentalStatus } from "@/services/provider/updateRentalStatus";

export async function updateRentalStatusAction(
  rentalId: string,
  _: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const rawData = {
    status: formData.get("status"),
  };

  const parsed = updateRentalStatusSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
      errorDetails: parsed.error.flatten().fieldErrors,
    };
  }

  return updateRentalStatus(rentalId, parsed.data as UpdateRentalStatusPayload);
}
