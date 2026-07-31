"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";
import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";
import { CreateGearPayload } from "@/schemas/create-gear.schema";
import { revalidateTag } from "next/cache";

export async function createGear(
  payload: CreateGearPayload,
): Promise<ActionState<TGear>> {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const requestBody = {
      ...payload,
      images: payload.images,
    };

    delete (requestBody as { image?: string }).image;

    const res = await fetch(`${API.BASE_URL}/gears`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",

        Authorization: `Bearer ${accessToken}`,
      },

      body: JSON.stringify(requestBody),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
        errorDetails: result.errorDetails,
      };
    }

    revalidateTag("provider-gears", { expire: 0 });
    revalidateTag("featured-gear", { expire: 0 });

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
