import { API } from "@/config/api";

type Params = {
  page?: number;
  limit?: number;

  searchTerm?: string;
  category?: string;
  brand?: string;

  minPrice?: string;
  maxPrice?: string;

  startDate?: string;
  endDate?: string;

  sortBy?: string;
  sortOrder?: "asc" | "desc";
};

export async function getAllGear({
  page = 1,
  limit = 12,

  searchTerm,
  category,
  brand,

  minPrice,
  maxPrice,

  startDate,
  endDate,

  sortBy,
  sortOrder,
}: Params) {
  const params = new URLSearchParams();

  params.set("page", String(page));
  params.set("limit", String(limit));

  if (searchTerm) {
    params.set("searchTerm", searchTerm);
  }

  if (category) {
    params.set("category", category);
  }

  if (brand) {
    params.set("brand", brand);
  }

  if (minPrice) {
    params.set("minPrice", minPrice);
  }

  if (maxPrice) {
    params.set("maxPrice", maxPrice);
  }

  if (startDate) {
    params.set("startDate", startDate);
  }

  if (endDate) {
    params.set("endDate", endDate);
  }

  if (sortBy) {
    params.set("sortBy", sortBy);
  }

  if (sortOrder) {
    params.set("sortOrder", sortOrder);
  }

  const res = await fetch(`${API.BASE_URL}/gears?${params.toString()}`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["gears"],
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch gears");
  }
  return res.json();
}
