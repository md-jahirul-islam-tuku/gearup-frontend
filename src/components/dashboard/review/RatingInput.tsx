"use client";

import { Star } from "lucide-react";

type Props = {
  value: number;
  onChange: (rating: number) => void;
};

export default function RatingInput({ value, onChange }: Props) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onChange(star)}
          className="transition hover:scale-110"
        >
          <Star
            className={`size-7 ${
              star <= value
                ? "fill-yellow-400 text-yellow-400"
                : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
}
