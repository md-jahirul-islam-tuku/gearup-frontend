"use server";

import { ActionState } from "@/types/action";

import { updateUserStatus } from "@/services/admin/updateUserStatus";

export async function updateUserStatusAction(
  id: string,
  _: ActionState<null>,
  formData: FormData,
) {
  const status = formData.get("status") as string;

  return updateUserStatus(id, status);
}
