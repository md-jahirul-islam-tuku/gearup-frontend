import { PackageSearch } from "lucide-react";

export default function EmptyGear() {
  return (
    <div className="flex flex-col items-center justify-center py-24">
      <PackageSearch className="mb-4 size-16 text-muted-foreground" />

      <h3 className="text-xl font-semibold">No gear found</h3>

      <p className="mt-2 text-muted-foreground">
        Try changing your search or filters.
      </p>
    </div>
  );
}
