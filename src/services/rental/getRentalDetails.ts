"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TRental } from "@/types/rental";

type RentalDetailsResponse = {
  success: boolean;
  message: string;
  data: TRental;
};

export async function getRentalDetails(
  rentalId: string,
): Promise<RentalDetailsResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/rentals/${rentalId}`, {
    headers: {
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
    cache: "no-store",
  });

  return res.json();
}
