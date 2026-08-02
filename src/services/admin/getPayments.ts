"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

export default async function getPayments(searchParams?: {
  page?: string;
  limit?: string;
}) {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const query = new URLSearchParams();

  if (searchParams?.page) {
    query.append("page", searchParams.page);
  }

  if (searchParams?.limit) {
    query.append("limit", searchParams.limit);
  }

  const res = await fetch(
    `${API.BASE_URL}/admin/payments?${query.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken ?? ""}`,
      },
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch payments");
  }

  return res.json();
}
