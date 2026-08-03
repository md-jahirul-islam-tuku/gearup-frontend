"use client";

import { Input } from "@/components/ui/input";

type Props = {
  min: string;
  max: string;

  onMinChange: (v: string) => void;
  onMaxChange: (v: string) => void;
};

export default function PriceRange({
  min,
  max,
  onMinChange,
  onMaxChange,
}: Props) {
  return (
    <div className="flex gap-2">
      <Input
        value={min}
        placeholder="Min"

        onChange={(e) => onMinChange(e.target.value)}
      />

      <Input
        value={max}
        placeholder="Max"

        onChange={(e) => onMaxChange(e.target.value)}
      />
    </div>
  );
}
