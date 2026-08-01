"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

export async function getAdminRentals(page = "1") {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/admin/rentals?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },

    cache: "no-store",

    next: {
      tags: ["admin-rentals"],
    },
  });

  return res.json();
}
