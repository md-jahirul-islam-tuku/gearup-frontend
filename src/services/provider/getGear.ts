"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";

export async function getGear(id: string): Promise<ActionState<TGear>> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/gears/${id}`, {
    headers: {
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
    next: {
      tags: ["gear", `gear-${id}`],
    },
  });

  return res.json();
}
