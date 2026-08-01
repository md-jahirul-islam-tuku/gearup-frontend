"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";
import { TCategory } from "@/types/category";

import { CategoryPayload } from "@/schemas/category.schema";

export async function updateCategory(
  id: string,
  payload: CategoryPayload,
): Promise<ActionState<TCategory>> {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${API.BASE_URL}/categories/${id}`, {
      method: "PATCH",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
        errorDetails: result.errorDetails,
      };
    }

    revalidateTag("category", { expire: 0 });

    return {
      success: true,
      message: result.message,
      data: result.data,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
