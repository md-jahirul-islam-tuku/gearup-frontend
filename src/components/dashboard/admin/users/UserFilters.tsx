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

export default function UserFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(
    searchParams.get("searchTerm") ?? "",
  );

  const role = searchParams.get("role") ?? "all";
  const status = searchParams.get("status") ?? "all";

  const roleLabel = {
    all: "All Roles",
    ADMIN: "Admin",
    PROVIDER: "Provider",
    CUSTOMER: "Customer",
  }[role];

  const statusLabel = {
    all: "All Status",
    ACTIVE: "Active",
    SUSPENDED: "Suspended",
  }[status];

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

  const handleReset = () => {
    setSearchTerm("");
    router.push(pathname);
  };

  return (
    <div className="flex flex-col gap-4 lg:flex-row">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <Input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users..."
          className="pl-10"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
      </div>

      {/* Role */}
      <Select
        value={role}
        onValueChange={(value) => updateQuery("role", value)}
      >
        <SelectTrigger className="w-full lg:w-48">
          <SelectValue>{roleLabel}</SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Roles</SelectItem>
          <SelectItem value="ADMIN">Admin</SelectItem>
          <SelectItem value="PROVIDER">Provider</SelectItem>
          <SelectItem value="CUSTOMER">Customer</SelectItem>
        </SelectContent>
      </Select>

      {/* Status */}
      <Select
        value={status}
        onValueChange={(value) => updateQuery("status", value)}
      >
        <SelectTrigger className="w-full lg:w-48">
          <SelectValue>{statusLabel}</SelectValue>
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="ACTIVE">Active</SelectItem>
          <SelectItem value="SUSPENDED">Suspended</SelectItem>
        </SelectContent>
      </Select>
      {/* Reset */}
      <Button variant="outline" onClick={handleReset}>
        Reset
      </Button>
    </div>
  );
}
