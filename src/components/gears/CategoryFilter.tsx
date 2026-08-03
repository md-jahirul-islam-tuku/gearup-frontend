"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TCategoriesResponse } from "@/types/category";

type Props = {
  categories: TCategoriesResponse;
};

export default function CategoryFilter({ categories }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  return (
    <Select
      value={searchParams.get("category") ?? "All"}
      onValueChange={(value) => {
        const params = new URLSearchParams(searchParams);

        if (value === "All") {
          params.delete("category");
        } else {
          params.set("category", value ?? "");
        }

        router.push(`/gears?${params.toString()}`);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Category" />
      </SelectTrigger>

      <SelectContent className="p-2">
        <SelectItem value="All">All</SelectItem>

        {categories.data.data.map((category) => (
          <SelectItem key={category.id} value={category.slug}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
