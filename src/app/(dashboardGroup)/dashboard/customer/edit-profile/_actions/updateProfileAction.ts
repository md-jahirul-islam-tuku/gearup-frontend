"use server";

import { getZodErrors } from "@/lib/zod-error";

import { updateProfileSchema } from "@/schemas/update-profile.schema";

import { updateProfile } from "@/services/profile/updateProfile";

import { ActionState } from "@/types/action";
import { TUser } from "@/types/user";

export async function updateProfileAction(
  prevState: ActionState<TUser>,
  formData: FormData,
): Promise<ActionState<TUser>> {
  const payload = {
    name: formData.get("name")?.toString(),

    profileImage: formData.get("profileImage")?.toString(),
  };

  const validated = updateProfileSchema.safeParse(payload);

  if (!validated.success) {
    return {
      success: false,
      ...getZodErrors(validated.error),
    };
  }

  const result = await updateProfile(validated.data);

  return result;
}
