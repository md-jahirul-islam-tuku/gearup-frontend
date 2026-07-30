"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { Input } from "@/components/ui/input";

type PasswordInputProps = React.ComponentProps<typeof Input>;

export default function PasswordInput({
  className,
  ...props
}: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? "text" : "password"}
        className={`pr-10 ${className ?? ""}`}
      />

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        className="absolute top-1/2 right-3 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOff className="size-4" />
        ) : (
          <Eye className="size-4" />
        )}
      </button>
    </div>
  );
}
