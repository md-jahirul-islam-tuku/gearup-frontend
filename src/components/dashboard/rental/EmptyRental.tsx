import { PackageOpen } from "lucide-react";

export default function EmptyRental() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border py-20">
      <PackageOpen className="mb-4 size-12 text-muted-foreground" />

      <h3 className="text-xl font-semibold">No rentals found</h3>

      <p className="mt-2 text-muted-foreground">
        You haven&apos;t rented any gear yet.
      </p>
    </div>
  );
}
