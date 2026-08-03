"use client";

import { useSearchParams, useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

export default function SearchFilter() {
  const router = useRouter();

  const searchParams = useSearchParams();

  return (
    <Input
      placeholder="Search gear..."

      defaultValue={searchParams.get("searchTern") || ""}

      onChange={(e) => {
        const params = new URLSearchParams(searchParams);

        if (e.target.value) params.set("searchTerm", e.target.value);
        else params.delete("searchTerm");

        router.push(`/gears?${params.toString()}`);
      }}
    />
  );
}
