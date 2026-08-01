import RentalsTableSkeleton from "@/components/dashboard/rental/RentalsTableSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <Skeleton className="h-10 w-40" />
      </div>
      <RentalsTableSkeleton />
    </div>
  );
}
