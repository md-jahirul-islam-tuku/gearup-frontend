"use server";

import { redirect } from "next/navigation";
import jwt, { JwtPayload } from "jsonwebtoken";
import { cookies } from "next/headers";
import { API } from "@/config/api";
import { loginSchema } from "@/schemas/login.schema";
import { getZodErrors } from "@/lib/zod-error";
import { ActionState } from "@/types/action";

type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export const loginAction = async (
  redirectTo: string,
  prevState: ActionState<LoginResponse>,
  formData: FormData,
): Promise<ActionState<LoginResponse>> => {
  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const payload = { email, password };

  const validatedFields = loginSchema.safeParse(payload);

  if (!validatedFields.success) {
    return {
      success: false,
      ...getZodErrors(validatedFields.error),
    };
  }

  const res = await fetch(`${API.BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });
  const result = await res.json();
  if (result.success) {
    const cookieStore = await cookies();
    cookieStore.set("accessToken", result.data.accessToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      sameSite: "lax",
    });
    cookieStore.set("refreshToken", result.data.refreshToken, {
      httpOnly: true,
      maxAge: 60 * 60 * 24 * 7,
      sameSite: "lax",
    });
    const decodedAccessToken = jwt.decode(
      result.data.accessToken,
    ) as JwtPayload;
    const userRole = decodedAccessToken.role;
    if (
      redirectTo &&
      typeof redirectTo === "string" &&
      redirectTo.startsWith("/") &&
      !redirectTo.startsWith("//")
    ) {
      redirect(redirectTo);
    }

    switch (userRole) {
      case "ADMIN":
        redirect("/dashboard/admin");

      case "CUSTOMER":
        redirect("/dashboard/customer");

      case "PROVIDER":
        redirect("/dashboard/provider");

      default:
        redirect("/");
    }
  }
  return result;
};
