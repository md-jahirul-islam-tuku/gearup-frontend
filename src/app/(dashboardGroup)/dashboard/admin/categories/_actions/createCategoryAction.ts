"use server";

import { ActionState } from "@/types/action";
import { TCategory } from "@/types/category";

import { categorySchema, CategoryPayload } from "@/schemas/category.schema";

import { createCategory } from "@/services/admin/createCategory";

export async function createCategoryAction(
  _: ActionState<TCategory>,
  formData: FormData,
): Promise<ActionState<TCategory>> {
  const rawData = {
    name: formData.get("name"),
    slug: formData.get("slug"),
    description: formData.get("description"),
  };

  const parsed = categorySchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      message: "Validation failed",
      errorDetails: parsed.error.flatten().fieldErrors,
    };
  }

  return createCategory(parsed.data as CategoryPayload);
}
