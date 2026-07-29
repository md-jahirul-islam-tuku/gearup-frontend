import { PackageSearch } from "lucide-react";

export default function EmptyGear() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">
      <PackageSearch className="mb-5 size-14 text-muted-foreground" />

      <h3 className="text-2xl font-semibold">No Gear Found</h3>

      <p className="mt-2 text-muted-foreground">
        Try changing your filters or search keyword.
      </p>
    </div>
  );
}
