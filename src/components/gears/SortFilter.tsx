"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SortFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const value = searchParams.get("sortOrder") ?? "Newest";

  const handleSort = (sortOrder: string | null) => {
    if (sortOrder !== "asc" && sortOrder !== "desc") {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    params.set("sortBy", "pricePerDay");
    params.set("sortOrder", sortOrder);

    params.delete("page");

    router.push(`/gears?${params.toString()}`);
  };

  return (
    <Select value={value} onValueChange={handleSort}>
      <SelectTrigger className="w-full">
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="asc">Price Low → High</SelectItem>

        <SelectItem value="desc">Price High → Low</SelectItem>
      </SelectContent>
    </Select>
  );
}
