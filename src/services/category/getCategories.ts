import { API } from "@/config/api";
import { ICategory } from "@/types/category";

export const getCategories = async (): Promise<ICategory[]> => {
  const res = await fetch(`${API.BASE_URL}/categories`, {
    next: {
      revalidate: 3600,
      tags: ["categories"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch categories");
  }

  const result = await res.json();

  return result.data;
};
