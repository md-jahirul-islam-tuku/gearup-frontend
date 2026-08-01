"use server";
import { revalidateTag } from "next/cache";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TCreateRentalPayload, TCreateRentalResponse } from "@/types/rental";

export const createRental = async (
  payload: TCreateRentalPayload,
): Promise<TCreateRentalResponse> => {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/rentals`, {
    method: "POST",

    headers: {
      Authorization: `Bearer ${accessToken ?? ""}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  });
  const result = await res.json();
  revalidateTag("my-rentals", { expire: 0 });

  return result;
};
