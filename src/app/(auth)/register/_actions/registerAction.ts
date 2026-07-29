import { API } from "@/config/api";
import { getZodErrors } from "@/lib/zod-error";
import { registerSchema } from "@/schemas/register.schema";
import { redirect } from "next/navigation";

type RegisterState = {
  success: boolean;
  message: string;
  data: {
    name: string;
    email: string;
    role: string;
  };
};

export const registerAction = async (
  prevState: RegisterState,
  formData: FormData,
) => {
  const password = formData.get("password") as string;
  const confirmPassword = formData.get("confirmPassword") as string;

  if (password !== confirmPassword) {
    return {
      success: false,
      statusCode: 400,
      message: "Password and Confirm Password do not match.",
    };
  }

  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    password,
    role: formData.get("role"),
  };

  const validatedFields = registerSchema.safeParse(payload);

  if (!validatedFields.success) {
    return {
      success: false,
      ...getZodErrors(validatedFields.error),
    };
  }

  const res = await fetch(`${API.BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await res.json();

  if (result.success) {
    redirect("/login");
  }

  return result;
};
