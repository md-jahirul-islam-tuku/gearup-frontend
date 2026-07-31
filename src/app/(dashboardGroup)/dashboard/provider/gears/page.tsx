import GearGrid from "@/components/dashboard/provider/gears/GearGrid";
import EmptyGearState from "@/components/dashboard/provider/gears/EmptyGearState";
import { getMyGears } from "@/services/provider/getMyGears";

export default async function ProviderGearsPage() {
  const result = await getMyGears();

  if (!result.success || !result.data) {
    return (
      <div className="text-destructive py-10 text-center">{result.message}</div>
    );
  }

  const gears = result.data.data;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Gears</h1>

        <p className="text-muted-foreground">Manage all your rental gears.</p>
      </div>

      {gears.length === 0 ? <EmptyGearState /> : <GearGrid gears={gears} />}
    </div>
  );
}
