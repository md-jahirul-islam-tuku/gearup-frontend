"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TCategoriesResponse } from "@/types/category";

type Query = {
  page?: string;
  searchTerm?: string;
};

export async function getCategories(
  query?: Query,
): Promise<TCategoriesResponse> {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  const params = new URLSearchParams();

  if (query?.page) params.set("page", query.page);

  if (query?.searchTerm) params.set("searchTerm", query.searchTerm);

  const res = await fetch(`${API.BASE_URL}/categories?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },

    next: {
      tags: ["categories"],
    },
  });

  return res.json();
}
