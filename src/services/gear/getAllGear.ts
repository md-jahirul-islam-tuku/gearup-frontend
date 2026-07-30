import { API } from "@/config/api";
import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";
import { PaginatedResponse } from "@/types/paginate";

export const getAllGear = async (): Promise<
  ActionState<PaginatedResponse<TGear>>
> => {
  const res = await fetch(`${API.BASE_URL}/gears`);

  return res.json();
};
