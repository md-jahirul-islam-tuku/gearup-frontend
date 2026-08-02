import { CircleX } from "lucide-react";

export default function CancelAnimation() {
  return (
    <div className="flex justify-center">
      <CircleX className="size-28 text-red-500 animate-pulse" />
    </div>
  );
}
