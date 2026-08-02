import { CreditCard } from "lucide-react";

export default function EmptyPayment() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border py-24">
      <CreditCard className="mb-4 size-12 text-muted-foreground" />

      <h3 className="text-xl font-semibold">No Payments Yet</h3>

      <p className="mt-2 text-muted-foreground">
        Your completed payments will appear here.
      </p>
    </div>
  );
}
