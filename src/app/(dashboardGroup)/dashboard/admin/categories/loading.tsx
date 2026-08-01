import CategoryTableSkeleton from "@/components/dashboard/admin/categories/CategoryTableSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between">
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-40" />
      </div>

      <CategoryTableSkeleton />
    </div>
  );
}
