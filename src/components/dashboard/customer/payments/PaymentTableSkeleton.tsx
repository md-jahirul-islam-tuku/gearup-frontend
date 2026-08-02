import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border">
      <div className="space-y-4 p-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-full" />
        ))}
      </div>
    </div>
  );
}
