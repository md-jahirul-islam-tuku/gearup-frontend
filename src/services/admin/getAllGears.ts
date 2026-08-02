"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TGearResponse } from "@/types/gear";

export async function getAllGears(page = "1"): Promise<TGearResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/admin/gear?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },

    cache: "no-store",

    next: {
      tags: ["admin-gears"],
    },
  });

  return res.json();
}
