"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

export async function createCheckoutSession(rentalId: string) {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/payments/create-checkout-session`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${accessToken}`,
    },

    body: JSON.stringify({
      rentalId,
    }),
  });

  return res.json();
}
