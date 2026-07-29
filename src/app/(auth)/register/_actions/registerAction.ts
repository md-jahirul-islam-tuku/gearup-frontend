import { API } from "@/config/api";
import { getZodErrors } from "@/lib/zod-error";
import { registerSchema } from "@/schemas/register.schema";
import { ActionState } from "@/types/action";
import { TUser } from "@/types/user";
import { redirect } from "next/navigation";

export const registerAction = async (
  prevState: ActionState<TUser>,
  formData: FormData,
): Promise<ActionState<TUser>> => {
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    role: formData.get("role"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  const validatedFields = registerSchema.safeParse(payload);

  if (!validatedFields.success) {
    return {
      success: false,
      ...getZodErrors(validatedFields.error),
    };
  }

  const { name, email, role, password } = validatedFields.data;

  const res = await fetch(`${API.BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      role,
      password,
    }),
  });

  const result = await res.json();

  if (result.success) {
    redirect("/login");
  }

  return result;
};
