"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function GearFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") ?? "",
  );

  const availability = searchParams.get("isAvailable") ?? "all";

  const availabilityLabel = {
    all: "All",
    true: "Available",
    false: "Unavailable",
  }[availability];

  const updateQuery = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.delete("page");

    const queryString = params.toString();

    router.push(queryString ? `${pathname}?${queryString}` : pathname);
  };

  const handleSearch = () => {
    updateQuery("searchTerm", searchTerm);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search gear..."
          className="pl-10"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>

      {/* Availability */}
      <Select
        value={availability}
        onValueChange={(value) => updateQuery("isAvailable", value)}
      >
        <SelectTrigger className="w-full lg:w-52">
          <SelectValue>{availabilityLabel}</SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="true">Available</SelectItem>
          <SelectItem value="false">Unavailable</SelectItem>
        </SelectContent>
      </Select>
      <Button variant="outline" onClick={() => router.push(pathname)}>
        Reset
      </Button>
    </div>
  );
}
