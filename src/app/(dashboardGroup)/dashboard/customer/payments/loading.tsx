import PaymentTableSkeleton from "@/components/dashboard/customer/payments/PaymentTableSkeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="h-8 w-56 animate-pulse rounded bg-muted" />

        <div className="h-4 w-72 animate-pulse rounded bg-muted" />
      </div>

      <PaymentTableSkeleton />
    </div>
  );
}
