import { Card } from "@/components/ui/card";

export default function GearCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-4/3 animate-pulse bg-muted" />

      <div className="space-y-4 p-5">
        <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />

        <div className="h-4 w-1/2 animate-pulse rounded bg-muted" />

        <div className="h-4 w-full animate-pulse rounded bg-muted" />

        <div className="h-10 animate-pulse rounded bg-muted" />
      </div>
    </Card>
  );
}
