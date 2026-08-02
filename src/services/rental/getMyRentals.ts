"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TMyRentalResponse } from "@/types/rental";

export async function getMyRentals(): Promise<TMyRentalResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/rentals/my-rentals`, {
    headers: {
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
    cache: "no-store",
    next: {
      revalidate: 0,
      tags: ["my-rentals"],
    },
  });
  const result = await res.json();

  return result;
}
