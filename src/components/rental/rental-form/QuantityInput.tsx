"use client";

import { Button } from "@/components/ui/button";

type Props = {
  value: number;
  stock: number;
  onChange: (value: number) => void;
};

export default function QuantityInput({ value, stock, onChange }: Props) {
  return (
    <div className="space-y-2">
      <label className="font-medium">Quantity</label>

      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="outline"
          onClick={() => onChange(Math.max(1, value - 1))}
        >
          -
        </Button>

        <span className="w-10 text-center font-semibold">{value}</span>

        <Button
          type="button"
          variant="outline"
          disabled={value >= stock}
          onClick={() => onChange(Math.min(stock, value + 1))}
        >
          +
        </Button>
      </div>

      <p className="text-xs text-muted-foreground">Available stock: {stock}</p>
    </div>
  );
}
