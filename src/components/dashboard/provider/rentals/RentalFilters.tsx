"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function RentalFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") ?? "",
  );

  const updateQuery = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.delete("page");

    router.push(
      params.toString() ? `${pathname}?${params.toString()}` : pathname,
    );
  };

  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row">
      <Input
        placeholder="Search customer..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            updateQuery("searchTerm", searchTerm);
          }
        }}
      />

      <Select
        value={searchParams.get("status") ?? "all"}
        onValueChange={(value) => updateQuery("status", value)}
      >
        <SelectTrigger className="w-full lg:w-52">
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="PLACED">Placed</SelectItem>
          <SelectItem value="CONFIRMED">Confirmed</SelectItem>
          <SelectItem value="PICKED_UP">Picked Up</SelectItem>
          <SelectItem value="RETURNED">Returned</SelectItem>
          <SelectItem value="CANCELLED">Cancelled</SelectItem>
        </SelectContent>
      </Select>

      <Button variant="outline" onClick={() => router.push(pathname)}>
        Reset
      </Button>
    </div>
  );
}
