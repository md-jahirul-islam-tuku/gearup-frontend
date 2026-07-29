import { API } from "@/config/api";

export const getAllGear = async () => {
  const res = await fetch(`${API.BASE_URL}/gears`);

  return res.json();
};
