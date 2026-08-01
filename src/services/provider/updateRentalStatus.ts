"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";

import { UpdateRentalStatusPayload } from "@/schemas/update-rental-status.schema";

export async function updateRentalStatus(
  rentalId: string,
  payload: UpdateRentalStatusPayload,
): Promise<ActionState> {
  try {
    const cookieStore = await cookies();

    const accessToken = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${API.BASE_URL}/rentals/${rentalId}/status`, {
      method: "PATCH",

      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(payload),
    });

    const result = await res.json();
    console.log(result);
    if (!res.ok) {
      return {
        success: false,
        message: result.message ?? "Failed to update rental status",
      };
    }

    revalidateTag("provider-rentals", { expire: 0 });

    return {
      success: true,
      message: result.message ?? "Rental status updated successfully",
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
