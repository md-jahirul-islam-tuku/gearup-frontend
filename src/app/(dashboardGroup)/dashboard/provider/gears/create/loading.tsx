import GearFormSkeleton from "@/components/dashboard/provider/gears/GearFormSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-9 w-48" />
        <Skeleton className="h-5 w-72" />
      </div>

      <GearFormSkeleton />
    </div>
  );
}
