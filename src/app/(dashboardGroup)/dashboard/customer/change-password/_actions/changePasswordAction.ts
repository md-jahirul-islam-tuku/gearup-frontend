"use server";

import { getZodErrors } from "@/lib/zod-error";

import { changePasswordSchema } from "@/schemas/change-password.schema";

import { changePassword } from "@/services/profile/changePassword";

import { ActionState } from "@/types/action";

export async function changePasswordAction(
  prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const payload = {
    oldPassword: formData.get("oldPassword")?.toString() ?? "",

    newPassword: formData.get("newPassword")?.toString() ?? "",

    confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
  };

  const validated = changePasswordSchema.safeParse(payload);

  if (!validated.success) {
    return {
      success: false,
      ...getZodErrors(validated.error),
    };
  }

  const { oldPassword, newPassword } = validated.data;
  const validatedData = { oldPassword, newPassword };

  return changePassword(validatedData);
}
