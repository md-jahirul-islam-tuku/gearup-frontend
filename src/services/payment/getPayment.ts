"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

export async function getPayment(id: string) {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/payments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },

    cache: "no-store",
  });

  return res.json();
}
