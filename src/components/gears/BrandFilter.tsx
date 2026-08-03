"use client";

import { useRouter, useSearchParams } from "next/navigation";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TGearListResponse } from "@/types/gear";

type Props = {
  result: TGearListResponse;
};

export default function BrandFilter({ result }: Props) {
  const router = useRouter();

  const searchParams = useSearchParams();

  return (
    <Select
      value={searchParams.get("brand") ?? "All"}

      onValueChange={(value) => {
        const params = new URLSearchParams(searchParams);

        if (value === "All") params.delete("brand");
        else params.set("brand", value ?? "");

        router.push(`/gears?${params.toString()}`);
      }}
    >
      <SelectTrigger>
        <SelectValue placeholder="Brand" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="All">All</SelectItem>

        {result.data.data?.map((brand) => (
          <SelectItem key={brand.id} value={brand.brand}>
            {brand.brand}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
