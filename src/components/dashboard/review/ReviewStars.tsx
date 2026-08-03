import { Star } from "lucide-react";

type Props = {
  rating: number;
  size?: number;
};

export default function ReviewStars({ rating, size = 18 }: Props) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          size={size}
          className={
            index < rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-muted-300"
          }
        />
      ))}
    </div>
  );
}
