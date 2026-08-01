"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";
import { PaginatedResponse } from "@/types/pagination";
import { TRental } from "@/types/rental";

type GetProviderRentalsParams = {
  page?: number;
  limit?: number;
  status?: string;
};

type Query = {
  page?: string;
  limit?:string;
  searchTerm?: string;
  status?: string;
};

export async function getProviderRentals(
  query?: Query,
  params: GetProviderRentalsParams = {},
): Promise<ActionState<PaginatedResponse<TRental>>> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in.",
    };
  }

  const searchParams = new URLSearchParams();

  if (params.page) {
    searchParams.set("page", params.page.toString());
  }

  if (params.limit) {
    searchParams.set("limit", params.limit.toString());
  }

  if (params.status) {
    searchParams.set("status", params.status);
  }

  if (query?.page) searchParams.set("page", query.page);

  if (query?.searchTerm) searchParams.set("searchTerm", query.searchTerm);

  if (query?.status) searchParams.set("status", query.status);

  const res = await fetch(
    `${API.BASE_URL}/rentals/provider?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        tags: ["provider-rentals"],
      },
    },
  );

  const result = await res.json();

  return result;
}
