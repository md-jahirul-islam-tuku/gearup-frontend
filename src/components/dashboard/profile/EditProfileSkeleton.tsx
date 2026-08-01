import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function EditProfileSkeleton() {
  return (
    <div className="max-w-xl space-y-8">
      <div className="space-y-2">
        <Skeleton className="h-8 w-52" />
        <Skeleton className="h-4 w-72" />
      </div>

      <Card className="space-y-6 p-6">
        <div className="space-y-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <div className="space-y-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-10 w-full rounded-md" />
        </div>

        <Skeleton className="h-10 w-full rounded-md" />
      </Card>
    </div>
  );
}
