"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TMyPaymentResponse } from "@/types/payment";

export async function getMyPayments(page = 1): Promise<TMyPaymentResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/payments/my-payments?page=${page}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },

    next: {
      tags: ["my-payments"],
      revalidate: 0,
    },
  });

  return res.json();
}
