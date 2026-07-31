"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";
import { ActionState } from "@/types/action";
import { revalidateTag } from "next/cache";

export async function deleteGear(id: string): Promise<ActionState<null>> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/gears/${id}`, {
    method: "DELETE",

    headers: {
      Authorization: `Bearer ${token ?? ""}`,
    },
  });

  const result = await res.json();

  if (result.success) {
    revalidateTag("provider-gears", { expire: 0 });
    revalidateTag("featured-gear", { expire: 0 });
  }

  return result;
}
