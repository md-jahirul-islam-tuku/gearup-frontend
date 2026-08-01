import GearTableSkeleton from "@/components/dashboard/admin/gears/GearTableSkeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Gear Management</h1>
      </div>

      <GearTableSkeleton />
    </div>
  );
}
