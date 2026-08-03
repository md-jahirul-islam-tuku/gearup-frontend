import { cookies } from "next/headers";

import { API } from "@/config/api";

import { TReviewPayload, TReviewResponse } from "@/types/review";

export const createReview = async (
  payload: TReviewPayload,
): Promise<TReviewResponse> => {
  const accessToken = (await cookies()).get("accessToken")?.value;

  const res = await fetch(`${API.BASE_URL}/reviews`, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",

      Authorization: `Bearer ${accessToken ?? ""}`,
    },

    body: JSON.stringify(payload),

    cache: "no-store",
  });

  return res.json();
};
