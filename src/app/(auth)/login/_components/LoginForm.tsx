"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { loginAction } from "../_actions/loginAction";
import { ActionState } from "@/types/action";
import PasswordInput from "@/components/shared/password-input/PasswordInput";
import FormError from "@/components/shared/FormError/FormError";

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
};

const LoginForm = () => {
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";

  const initialState: ActionState<LoginResponse> = {
    success: false,
    message: "",
    errorDetails: {},
  };

  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo),
    initialState,
  );
  useEffect(() => {
    if (!state.message) return;

    if (!state.success) {
      toast.error(state.message);
    }
  }, [state]);
  return (
    <form action={action}>
      <Card className="p-6">
        <Input type="email" name="email" placeholder="Your email address" />

        <FormError error={state.errorDetails?.email?.[0]} />

        <PasswordInput name="password" placeholder="Password" required />

        <FormError error={state.errorDetails?.password?.[0]} />
        <Button type="submit">{pending ? "Submitting..." : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginForm;
