"use server";

import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";

import {
  createGearSchema,
  CreateGearPayload,
} from "@/schemas/create-gear.schema";

import { createGear } from "@/services/provider/createGear";

export async function createGearAction(
  _: ActionState<TGear>,
  formData: FormData,
): Promise<ActionState<TGear>> {
  const rawData = {
    name: formData.get("name"),
    brand: formData.get("brand"),
    description: formData.get("description"),
    pricePerDay: formData.get("pricePerDay"),
    stock: formData.get("stock"),
    categoryId: formData.get("categoryId"),
    images: [
      formData.get("image1"),
      formData.get("image2"),
      formData.get("image3"),
      formData.get("image4"),
    ].filter((img): img is string => Boolean(img)),
  };

  const parsed = createGearSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
      errorDetails: parsed.error.flatten().fieldErrors,
    };
  }

  return createGear(parsed.data as CreateGearPayload);
}
