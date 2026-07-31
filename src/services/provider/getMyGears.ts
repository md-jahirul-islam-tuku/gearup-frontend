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
  availability?: "available" | "unavailable";
};

export async function getMyGears(
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

  if (params.page) searchParams.set("page", params.page.toString());

  if (params.limit) searchParams.set("limit", params.limit.toString());

  if (params.searchTerm) {
    searchParams.set("searchTerm", params.searchTerm);
  }

  if (params.category) {
    searchParams.set("category", params.category);
  }

  if (params.availability) {
    searchParams.set("availability", params.availability);
  }

  const res = await fetch(
    `${API.BASE_URL}/gears/my-gears?${searchParams.toString()}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: {
        tags: ["provider-gears"],
      },
    },
  );

  const result = await res.json();

  return result;
}
