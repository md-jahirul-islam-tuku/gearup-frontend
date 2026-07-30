"use server";

import { API } from "@/config/api";
import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";

export const getGearDetails = async (
  id: string,
): Promise<ActionState<TGear>> => {
  const res = await fetch(`${API.BASE_URL}/gears/${id}`, {
    next: {
      revalidate: 60,
      tags: [`gear-${id}`],
    },
  });

  return res.json();
};
