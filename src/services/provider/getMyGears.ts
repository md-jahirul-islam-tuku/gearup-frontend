"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { ActionState } from "@/types/action";
import { PaginatedResponse } from "@/types/pagination";
import { TGear } from "@/types/gear";

type GetMyGearsParams = {
  page?: number;
  limit?: number;
  searchTerm?: string;
  category?: string;
  isAvailable?: "available" | "unavailable";
};

type Query = {
  page?: string;
  limit?: number;
  searchTerm?: string;
  isAvailable?: string;
};

export async function getMyGears(
  query?: Query,
  params: GetMyGearsParams = {},
): Promise<ActionState<PaginatedResponse<TGear>>> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  if (!accessToken) {
    return {
      success: false,
      message: "User not logged in.",
    };
  }

  const searchParams = new URLSearchParams();

  if (params.page !== undefined)
    searchParams.set("page", params.page.toString());

  if (params.limit !== undefined)
    searchParams.set("limit", params.limit.toString());

  if (params.searchTerm) {
    searchParams.set("searchTerm", params.searchTerm);
  }

  if (params.category) {
    searchParams.set("category", params.category);
  }

  if (params.isAvailable) {
    searchParams.set("availability", params.isAvailable);
  }

  if (query?.page) {
    searchParams.set("page", query.page);
  }

  if (query?.searchTerm) {
    searchParams.set("searchTerm", query.searchTerm);
  }

  if (query?.isAvailable) {
    searchParams.set("isAvailable", query.isAvailable);
  }

  const res = await fetch(
    `${API.BASE_URL}/gears/my-gears?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      cache: "no-store",
      next: {
        revalidate: 0,
        tags: ["provider-gears"],
      },
    },
  );

  const result = await res.json();

  return result;
}
