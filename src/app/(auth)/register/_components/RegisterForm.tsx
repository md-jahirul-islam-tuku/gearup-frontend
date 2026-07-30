"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { registerAction } from "../_actions/registerAction";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ActionState } from "@/types/action";
import { TUser } from "@/types/user";
import PasswordInput from "@/components/shared/password-input/PasswordInput";
import FormError from "@/components/shared/FormError/FormError";

const RegisterForm = () => {
  const initialState: ActionState<TUser> = {
    success: false,
    message: "",
    errorDetails: {},
  };

  const [state, action, pending] = useActionState(registerAction, initialState);

  const items = [
    { label: "CUSTOMER", value: "CUSTOMER" },
    { label: "PROVIDER", value: "PROVIDER" },
  ];

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={action}>
      <Card className="p-6">
        <Input type="text" name="name" placeholder="Your full name" required />
        <FormError error={state.errorDetails?.name?.[0]} />

        <Input
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <FormError error={state.errorDetails?.email?.[0]} />

        <Select name="role" items={items}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Your Role" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {items.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
        <FormError error={state.errorDetails?.role?.[0]} />

        <PasswordInput name="password" placeholder="Password" required />

        <FormError error={state.errorDetails?.password?.[0]} />

        <PasswordInput
          name="confirmPassword"
          placeholder="Confirm Password"
          required
        />

        <FormError error={state.errorDetails?.confirmPassword?.[0]} />

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Creating Account..." : "Create Account"}
        </Button>
      </Card>
    </form>
  );
};

export default RegisterForm;
