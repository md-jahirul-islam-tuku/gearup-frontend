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
  });
  const result = await res.json();

  return result;
}
