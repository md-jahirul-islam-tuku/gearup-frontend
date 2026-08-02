import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function ProfileSkeleton() {
  return (
    <div className="max-w-3xl">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>

        <p className="text-muted-foreground">
          Manage your personal information.
        </p>
      </div>

      <div className="space-y-6">
        <Skeleton className="mx-auto h-28 w-28 rounded-full" />

        <Skeleton className="mx-auto h-7 w-48" />

        <Skeleton className="mx-auto h-5 w-64" />

        <Skeleton className="h-56 w-full" />

        <div className="grid gap-4 sm:grid-cols-2">
          <Skeleton className="h-11" />

          <Skeleton className="h-11" />
        </div>
      </div>
    </div>
  );
}
