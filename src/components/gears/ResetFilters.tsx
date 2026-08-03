"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function ResetFilters() {
  const router = useRouter();

  return (
    <Button
      className="shadow-md"
      variant="outline"
      onClick={() => router.push("/gears")}
    >
      Reset
    </Button>
  );
}
