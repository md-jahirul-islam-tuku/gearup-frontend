import { CreditCard } from "lucide-react";

export default function EmptyPayments() {
  return (
    <div className="flex h-80 flex-col items-center justify-center rounded-xl border">
      <CreditCard className="mb-4 size-14 text-muted-foreground" />

      <h3 className="text-lg font-semibold">No Payments Found</h3>

      <p className="mt-2 text-sm text-muted-foreground">
        There are no payment records available.
      </p>
    </div>
  );
}
