import { Skeleton } from "@/components/ui/skeleton";

export default function PaymentTableSkeleton() {
  return (
    <div className="rounded-xl border">
      <div className="space-y-4 p-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className="flex items-center gap-6">
            <Skeleton className="h-14 w-14 rounded-lg" />

            <Skeleton className="h-5 w-48" />

            <Skeleton className="h-5 w-28" />

            <Skeleton className="h-5 w-24" />

            <Skeleton className="h-5 w-24" />

            <Skeleton className="h-5 w-28" />

            <Skeleton className="ml-auto h-8 w-8 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
