"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Input } from "@/components/ui/input";

export default function AvailabilityFilter() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [startDate, setStartDate] = useState(
    searchParams.get("startDate") ?? "",
  );

  const [endDate, setEndDate] = useState(searchParams.get("endDate") ?? "");

  const today = new Date().toISOString().split("T")[0];

  const handleStartDateChange = (value: string) => {
    setStartDate(value);
    if (!value || !endDate) {
      return;
    }

    if (value > endDate) {
      return;
    }

    const params = new URLSearchParams(searchParams);

    params.set("startDate", value);
    params.set("endDate", endDate);

    router.push(`/gears?${params.toString()}`);
  };

  const handleEndDateChange = (value: string) => {
    setEndDate(value);
    if (!startDate || !value) {
      return;
    }

    if (value < startDate) {
      return;
    }

    const params = new URLSearchParams(searchParams);

    params.set("startDate", startDate);
    params.set("endDate", value);

    router.push(`/gears?${params.toString()}`);
  };

  return (
    <div className="flex gap-2">
      <Input
        type="date"
        min={today}
        value={startDate}
        onChange={(e) => handleStartDateChange(e.target.value)}
      />

      <Input
        type="date"
        min={startDate || today}
        value={endDate}
        onChange={(e) => handleEndDateChange(e.target.value)}
      />
    </div>
  );
}
