"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function PriceFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const update = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/gears?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      <Input
        key={`min-${searchParams.get("minPrice") ?? ""}`}
        placeholder="Min"
        defaultValue={searchParams.get("minPrice") ?? ""}
        onBlur={(e) => update("minPrice", e.target.value)}
      />

      <Input
        key={`max-${searchParams.get("maxPrice") ?? ""}`}
        placeholder="Max"
        defaultValue={searchParams.get("maxPrice") ?? ""}
        onBlur={(e) => update("maxPrice", e.target.value)}
      />
    </div>
  );
}
