"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-100 flex-col items-center justify-center gap-4">
      <h2 className="text-2xl font-semibold">Failed to load rental details</h2>

      <p className="text-muted-foreground">{error.message}</p>

      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}
