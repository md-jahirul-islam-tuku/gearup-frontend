"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";
import { TUsersResponse } from "@/types/user";

type Query = {
  page?: string;
  searchTerm?: string;
  role?: string;
  status?: string;
};

export async function getUsers(query?: Query): Promise<TUsersResponse> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const params = new URLSearchParams();

  if (query?.page) params.set("page", query.page);

  if (query?.searchTerm) params.set("searchTerm", query.searchTerm);

  if (query?.role) params.set("role", query.role);

  if (query?.status) params.set("status", query.status);

  const res = await fetch(`${API.BASE_URL}/admin/users?${params.toString()}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    next: {
      tags: ["admin-users"],
    },
  });

  return res.json();
}
