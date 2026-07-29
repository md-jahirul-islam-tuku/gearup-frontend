import { API } from "@/config/api";
import { TGearResponse } from "@/types/gear";

export const getFeaturedGear = async () => {
  const res = await fetch(`${API.BASE_URL}/gears?limit=6`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 6,
      tags: ["featured-gear"],
    },
  });

  const result: TGearResponse = await res.json();

  if (!result.success) {
    return [];
  }

  return result.data.data;
};
