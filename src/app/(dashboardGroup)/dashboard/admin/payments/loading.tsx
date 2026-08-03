import PaymentTableSkeleton from "@/components/dashboard/admin/payments/PaymentTableSkeleton";

export default function Loading() {
  return (
    <div className="space-y-6 p-4 lg:p-4">
      <div>
        <h1 className="text-3xl font-bold">Payment Management</h1>

        <p className="text-muted-foreground">View all payment transactions.</p>
      </div>

      <PaymentTableSkeleton />
    </div>
  );
}
