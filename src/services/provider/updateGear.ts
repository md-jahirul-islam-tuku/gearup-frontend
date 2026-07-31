"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";

import { UpdateGearPayload } from "@/schemas/update-gear.schema";

export async function updateGear(
  id: string,
  payload: UpdateGearPayload,
): Promise<ActionState<TGear>> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const body = {
    ...payload,
    images: payload.images ? payload.images : undefined,
  };
  delete (body as { image?: string }).image;

  const res = await fetch(`${API.BASE_URL}/gears/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token ?? ""}`,
    },
    body: JSON.stringify(body),
  });

  const result = await res.json();
  if (result.success) {
    revalidateTag("provider-gears", { expire: 0 });
    revalidateTag("gear", { expire: 0 });
    revalidateTag("featured-gear", { expire: 0 });
  }

  return result;
}
