import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container mx-auto py-16">
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}

        <Skeleton className="aspect-square w-full rounded-xl" />

        {/* Right Side */}

        <div className="space-y-5">
          <Skeleton className="h-10 w-3/4" />

          <Skeleton className="h-5 w-full" />

          <Skeleton className="h-5 w-11/12" />

          <Skeleton className="h-5 w-10/12" />

          <Skeleton className="h-12 w-40" />

          <Skeleton className="h-52 w-full rounded-xl" />
        </div>
      </div>

      <div className="mt-14 space-y-6">
        <Skeleton className="h-40 w-full rounded-xl" />

        <Skeleton className="h-52 w-full rounded-xl" />
      </div>
    </section>
  );
}
