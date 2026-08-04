import { API } from "@/config/api";

export async function getBrands() {
  const res = await fetch(`${API.BASE_URL}/gear/brands`, {
    cache: "force-cache",
    next: {
      revalidate: 3600 * 6,
      tags: ["brands"],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch brands");

  return res.json();
}
