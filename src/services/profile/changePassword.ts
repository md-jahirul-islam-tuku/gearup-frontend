"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";

import { ChangePasswordPayload } from "@/schemas/change-password.schema";

export async function changePassword(
  payload: ChangePasswordPayload,
): Promise<ActionState> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/auth/change-password`, {
    method: "PATCH",

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken ?? ""}`,
    },

    body: JSON.stringify(payload),
  });

  return res.json();
}
