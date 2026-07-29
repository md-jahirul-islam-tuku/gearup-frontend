"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useActionState, useEffect, useState } from "react";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { registerAction } from "../_actions/registerAction";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [state, action, pending] = useActionState(registerAction, false);

  const items = [
    { label: "CUSTOMER", value: "CUSTOMER" },
    { label: "PROVIDER", value: "PROVIDER" },
  ];

  useEffect(() => {
    if (!state) return;
    if (!state.success) {
      toast.error(state.message || "Registration failed!");
    } else {
      toast.success(state.message || "Account created successfully!");
    }
  }, [state]);
  console.log(state.errors?.password);

  return (
    <form action={action}>
      <Card className="p-6">
        <Input type="text" name="name" placeholder="Your full name" required />
        <p className="text-red-500 ml-2">{state.errors?.name?.[0]}</p>

        <Input
          type="email"
          name="email"
          placeholder="Your email address"
          required
        />
        <p className="text-red-500 ml-2">{state.errors?.email?.[0]}</p>

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
        <p className="text-red-500 ml-2">{state.errors?.role?.[0]}</p>

        <div className="relative">
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a password"
            required
            className="pr-10 mb-4"
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

        <div className="relative">
          <Input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            required
            className="pr-10"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground"
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
          </button>
        </div>
        <p className="text-red-500 ml-2">{state.errors?.password?.[0]}</p>

        <Button type="submit" className="w-full" disabled={pending}>
          {pending ? "Creating Account..." : "Create Account"}
        </Button>
      </Card>
    </form>
  );
};

export default RegisterForm;
