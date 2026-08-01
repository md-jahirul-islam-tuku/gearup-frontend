"use server";

import { cookies } from "next/headers";

import { revalidateTag } from "next/cache";

import { API } from "@/config/api";
import { ActionState } from "@/types/action";

export async function updateUserStatus(
  id: string,
  status: string,
): Promise<ActionState<null>> {
  try {
    const cookieStore = await cookies();

    const token = cookieStore.get("accessToken")?.value;

    const res = await fetch(`${API.BASE_URL}/admin/users/${id}`, {
      method: "PATCH",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        status,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      return {
        success: false,
        message: result.message,
      };
    }

    revalidateTag("admin-users", "max");

    return {
      success: true,
      message: result.message,
    };
  } catch {
    return {
      success: false,
      message: "Something went wrong",
    };
  }
}
