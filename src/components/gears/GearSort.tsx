"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  value: string;
  onChange: (value: string | null) => void;
};

export default function GearSort({ value, onChange }: Props) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="newest">Newest</SelectItem>

        <SelectItem value="oldest">Oldest</SelectItem>

        <SelectItem value="priceAsc">Price Low → High</SelectItem>

        <SelectItem value="priceDesc">Price High → Low</SelectItem>
      </SelectContent>
    </Select>
  );
}
