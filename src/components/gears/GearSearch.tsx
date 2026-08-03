"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function GearSearch({ value, onChange }: Props) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />

      <Input
        value={value}
        placeholder="Search gear..."
        className="pl-9"
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
