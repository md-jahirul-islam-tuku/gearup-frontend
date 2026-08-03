import GearTableSkeleton from "@/components/dashboard/admin/gears/GearTableSkeleton";

export default function Loading() {
  return (
    <div className="space-y-6 p-4 lg:p-4">
      <div>
        <h1 className="text-3xl font-bold">Gear Management</h1>
      </div>

      <GearTableSkeleton />
    </div>
  );
}
