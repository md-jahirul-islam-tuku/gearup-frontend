import { API } from "@/config/api";

export async function getCategories() {
  const res = await fetch(`${API.BASE_URL}/categories`, {
    next: {
      revalidate: 3600,
      tags: ["categories"],
    },
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  return res.json();
}
