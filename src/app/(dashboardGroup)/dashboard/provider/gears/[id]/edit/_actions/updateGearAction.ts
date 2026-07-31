"use server";

import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";

import {
  updateGearSchema,
  UpdateGearPayload,
} from "@/schemas/update-gear.schema";

import { updateGear } from "@/services/provider/updateGear";

export async function updateGearAction(
  id: string,
  _: ActionState<TGear>,
  formData: FormData,
): Promise<ActionState<TGear>> {
  console.log("Action called");
  const rawData = {
    name: formData.get("name"),
    brand: formData.get("brand"),
    description: formData.get("description"),
    pricePerDay: formData.get("pricePerDay"),
    stock: formData.get("stock"),
    categoryId: formData.get("categoryId"),
    image: formData.get("image"),
  };

  const parsed = updateGearSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
      errorDetails: parsed.error.flatten().fieldErrors,
    };
  }

  return updateGear(id, parsed.data as UpdateGearPayload);
}
