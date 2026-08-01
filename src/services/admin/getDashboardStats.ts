/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import { cookies } from "next/headers";

import { API } from "@/config/api";

export type TDashboardStats = {
  totalUsers: number;
  totalCustomers: number;
  totalProviders: number;
  totalGears: number;
  availableGears: number;
  totalRentals: number;
};

export default async function getDashboardStats(): Promise<TDashboardStats> {
  const cookieStore = await cookies();

  const accessToken = cookieStore.get("accessToken")?.value;

  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  const [usersRes, gearsRes, rentalsRes] = await Promise.all([
    fetch(`${API.BASE_URL}/admin/users`, {
      headers,
      cache: "no-store",
    }),

    fetch(`${API.BASE_URL}/admin/gear`, {
      headers,
      cache: "no-store",
    }),

    fetch(`${API.BASE_URL}/admin/rentals`, {
      headers,
      cache: "no-store",
    }),
  ]);

  const users = await usersRes.json();
  const gears = await gearsRes.json();
  const rentals = await rentalsRes.json();

  const userList = users.data ?? [];
  const gearList = gears.data ?? [];
  const rentalList = rentals.data ?? [];

  return {
    totalUsers: userList.length,

    totalCustomers: userList.filter((user: any) => user.role === "CUSTOMER")
      .length,

    totalProviders: userList.filter((user: any) => user.role === "PROVIDER")
      .length,

    totalGears: gearList.length,

    availableGears: gearList.filter((gear: any) => gear.isAvailable).length,

    totalRentals: rentalList.length,
  };
}
