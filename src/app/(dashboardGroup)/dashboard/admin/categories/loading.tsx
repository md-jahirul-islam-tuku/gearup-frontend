import CategoryTableSkeleton from "@/components/dashboard/admin/categories/CategoryTableSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6 p-4 lg:p-4">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Skeleton className="h-10 w-40" />
      </div>

      <CategoryTableSkeleton />
    </div>
  );
}
