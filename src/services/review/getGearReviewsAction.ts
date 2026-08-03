import { API } from "@/config/api";
import { TGearReviewsResponse } from "@/types/review";

export const getGearReviews = async (gearId: string) => {
  const res = await fetch(`${API.BASE_URL}/reviews/gear/${gearId}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch reviews");
  }

  const result: TGearReviewsResponse = await res.json();

  return result;
};
