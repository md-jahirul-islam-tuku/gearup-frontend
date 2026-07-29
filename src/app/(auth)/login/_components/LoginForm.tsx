"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { loginAction } from "../_actions/loginAction";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const searchParams = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "";
  const [state, action, pending] = useActionState(
    loginAction.bind(null, redirectTo),
    false,
  );
  useEffect(() => {
    if (!state) return;
    if (!state.success) {
      toast.error(state.message || "Login failed !");
    }
  }, [state]);
  return (
    <form action={action}>
      <Card className="p-6">
        <Input type="email" name="email" placeholder="Your email address" />
        <p className="text-red-500 ml-2">{state.errors?.email?.[0]}</p>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            required
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        <p className="text-red-500 ml-2">{state.errors?.password?.[0]}</p>
        <Button type="submit">{pending ? "Submitting..." : "Login"}</Button>
      </Card>
    </form>
  );
};

export default LoginForm;
