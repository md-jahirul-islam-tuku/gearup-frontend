"use client";

import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

type Props = {
  error: Error;
  reset: () => void;
  backUrl?: string;
};

export default function CommonError({ error, reset, backUrl = "/" }: Props) {
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border p-8 text-center shadow-sm">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
          <AlertTriangle className="size-8 text-destructive" />
        </div>

        <h2 className="text-2xl font-bold">Something went wrong</h2>

        <p className="mt-3 text-sm text-muted-foreground">
          {error.message || "Unexpected error occurred."}
        </p>

        <div className="mt-8 flex gap-3">
          <Button onClick={reset} className="flex-1">
            <RefreshCw className="mr-2 size-4" />
            Try Again
          </Button>

          <Button
            variant="outline"
            className="flex-1"
            onClick={() => router.push(backUrl)}
          >
            <ArrowLeft className="mr-2 size-4" />
            Home
          </Button>
        </div>
      </div>
    </div>
  );
}
