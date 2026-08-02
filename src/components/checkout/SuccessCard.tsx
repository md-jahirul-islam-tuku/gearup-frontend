import { CheckCircle2 } from "lucide-react";

export default function SuccessCard() {
  return (
    <div className="rounded-xl border p-12 text-center">
      <CheckCircle2 className="mx-auto size-20 text-green-500" />

      <h2 className="mt-6 text-3xl font-bold">Payment Successful</h2>

      <p className="mt-3 text-muted-foreground">
        Thank you. Your payment has been completed successfully.
      </p>
    </div>
  );
}
