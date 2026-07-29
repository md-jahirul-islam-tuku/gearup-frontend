import { cookies } from "next/headers";

export const getAuthHeader = async () => {
  const cookieStore = await cookies();

  const token = cookieStore.get("accessToken")?.value;

  return {
    Authorization: token ?? "",
  };
};
