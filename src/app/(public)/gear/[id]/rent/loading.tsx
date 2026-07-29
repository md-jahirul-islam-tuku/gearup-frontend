import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <section className="container mx-auto max-w-3xl py-16">
      <Skeleton className="mb-6 h-10 w-60" />

      <Skeleton className="h-125 w-full rounded-xl" />
    </section>
  );
}
