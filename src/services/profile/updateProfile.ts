"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";
import { TUser } from "@/types/user";

import { UpdateProfilePayload } from "@/schemas/update-profile.schema";
import { revalidateTag } from "next/cache";

export async function updateProfile(
  payload: UpdateProfilePayload,
): Promise<ActionState<TUser>> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/auth/me`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken ?? ""}`,
    },

    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    revalidateTag("my-profile", { expire: 0 });
  }

  return result;
}
