import { API } from "@/config/api";
import { TGearListResponse } from "@/types/gear";

export const getFeaturedGear = async () => {
  const res = await fetch(`${API.BASE_URL}/gears?limit=6`, {
    cache: "force-cache",
    next: {
      revalidate: 60 * 60 * 24,
      tags: ["featured-gear"],
    },
  });

  const result: TGearListResponse = await res.json();
  return result;
};
