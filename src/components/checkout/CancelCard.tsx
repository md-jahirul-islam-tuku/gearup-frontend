import { CircleX } from "lucide-react";

export default function CancelCard() {
  return (
    <div className="rounded-xl border p-12 text-center">
      <CircleX className="mx-auto size-20 text-red-500" />

      <h2 className="mt-6 text-3xl font-bold">Payment Cancelled</h2>

      <p className="mt-3 text-muted-foreground">
        Your payment was cancelled. You can retry anytime.
      </p>
    </div>
  );
}
