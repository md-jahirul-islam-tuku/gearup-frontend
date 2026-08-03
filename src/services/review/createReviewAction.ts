"use server";

import { revalidateTag } from "next/cache";

import { createReview } from "@/services/review/createReview";

import { TReviewPayload } from "@/types/review";

export const createReviewAction = async (payload: TReviewPayload) => {
  console.log(payload);
  const result = await createReview(payload);

  if (!result.success) {
    throw new Error(result.message);
  }

  revalidateTag("my-rentals", { expire: 0 });
  revalidateTag("gear-details", { expire: 0 });
  revalidateTag("gear-reviews", { expire: 0 });

  return result;
};
