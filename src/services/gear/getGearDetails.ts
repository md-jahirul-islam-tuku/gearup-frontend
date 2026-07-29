"use server";

import { API } from "@/config/api";
import { TGearDetailsResponse } from "@/types/gear";

export const getGearDetails = async (
  id: string,
): Promise<TGearDetailsResponse> => {
  const res = await fetch(`${API.BASE_URL}/gears/${id}`, {
    next: {
      revalidate: 60,
      tags: [`gear-${id}`],
    },
  });

  return res.json();
};
