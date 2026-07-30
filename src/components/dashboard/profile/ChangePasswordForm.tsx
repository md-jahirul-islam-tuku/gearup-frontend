"use client";

import { useActionState, useEffect, useRef } from "react";

import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import PasswordInput from "@/components/shared/password-input";

import { ActionState } from "@/types/action";
import { changePasswordAction } from "@/app/(dashboardGroup)/dashboard/customer/change-password/_actions/changePasswordAction";
import FormError from "@/components/shared/FormError/FormError";

const initialState: ActionState = {
  success: false,
  message: "",
};

export default function ChangePasswordForm() {
  const formRef = useRef<HTMLFormElement>(null);

  const [state, action, pending] = useActionState(
    changePasswordAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      formRef.current?.reset();
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form ref={formRef} action={action}>
      <Card className="space-y-6 p-6">
        <div>
          <PasswordInput
            name="oldPassword"
            placeholder="Current Password"
            autoComplete="old-password"
            required
          />

          <FormError error={state.errorDetails?.currentPassword?.[0]} />
        </div>

        <div>
          <PasswordInput
            name="newPassword"
            placeholder="New Password"
            autoComplete="new-password"
            required
          />

          <FormError error={state.errorDetails?.newPassword?.[0]} />
        </div>

        <div>
          <PasswordInput
            name="confirmPassword"
            placeholder="Confirm New Password"
            autoComplete="new-password"
            required
          />

          <FormError error={state.errorDetails?.confirmPassword?.[0]} />
        </div>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Updating Password..." : "Update Password"}
        </Button>
      </Card>
    </form>
  );
}
