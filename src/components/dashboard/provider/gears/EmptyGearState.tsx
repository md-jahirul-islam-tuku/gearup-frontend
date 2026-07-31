import { PackageOpen } from "lucide-react";

export default function EmptyGearState() {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-20">
      <PackageOpen className="mb-4 h-14 w-14 text-muted-foreground" />

      <h2 className="text-xl font-semibold">No gears found</h2>

      <p className="text-muted-foreground">
        Start by adding your first rental gear.
      </p>
    </div>
  );
}
