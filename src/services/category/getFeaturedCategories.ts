import { API } from "@/config/api";
import { TCategoriesResponse } from "@/types/category";

export async function getFeaturedCategories(): Promise<TCategoriesResponse> {
  const res = await fetch(`${API.BASE_URL}/categories`, {
    cache: "force-cache",
    next: {
      revalidate: 3600,
      tags: ["categories"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  return res.json();
}
