import { API } from "@/config/api";
import { cookies } from "next/headers";

export const cancelRental = async (rentalId: string) => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;
  const res = await fetch(`${API.BASE_URL}/rentals/${rentalId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken ?? ""}`,
    },
    credentials: "include",
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result.message || "Failed to cancel rental");
  }

  return result;
};
