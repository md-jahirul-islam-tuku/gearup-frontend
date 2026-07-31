"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { DashboardSidebarProps } from "./dashboard.types";

export default function DashboardUser({
  user,
}: Pick<DashboardSidebarProps, "user">) {
  return (
    <div className="rounded-xl border bg-background p-4">
      <div className="flex items-center gap-3">
        <Avatar className="size-12">
          <AvatarImage src={user.profileImage ?? ""} alt={user.name} />

          <AvatarFallback>{user.name.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>

        <div className="min-w-0">
          <p className="truncate font-semibold">{user.name}</p>

          <p className="truncate text-sm text-muted-foreground">{user.email}</p>

          <p className="mt-1 text-xs uppercase tracking-wide text-primary">
            {user.role}
          </p>
        </div>
      </div>
    </div>
  );
}
