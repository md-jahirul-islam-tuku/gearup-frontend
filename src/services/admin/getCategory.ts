"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TCategoryResponse } from "@/types/category";

export async function getCategory(id: string): Promise<TCategoryResponse> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
    next: {
      revalidate: 0,
      tags: ["category"],
    },
  });

  return res.json();
}
