import { Skeleton } from "@/components/ui/skeleton";

export default function RentalsSkeleton() {
  return (
    <div className="rounded-xl border p-6">
      <Skeleton className="mb-6 h-8 w-40" />

      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className="mb-5 h-20 w-full" />
      ))}
    </div>
  );
}
