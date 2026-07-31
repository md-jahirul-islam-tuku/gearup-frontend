import GearGrid from "@/components/dashboard/provider/gears/GearGrid";
import EmptyGearState from "@/components/dashboard/provider/gears/EmptyGearState";
import { getMyGears } from "@/services/provider/getMyGears";
import GearFilters from "@/components/dashboard/provider/gears/GearFilters";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Props = {
  searchParams: Promise<{
    page?: string;
    searchTerm?: string;
    isAvailable?: string;
  }>;
};

export default async function ProviderGearsPage({ searchParams }: Props) {
  const query = await searchParams;

  const result = await getMyGears(query);

  if (!result.success || !result.data) {
    return (
      <div className="text-destructive py-10 text-center">{result.message}</div>
    );
  }

  const gears = result.data.data;

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Gears</h1>

          <p className="text-muted-foreground">Manage all your rental gears.</p>
        </div>

        <GearFilters />
        <Link href="/dashboard/provider/gears/create">
          <Button>Add Gear</Button>
        </Link>
      </div>
      {gears.length === 0 ? <EmptyGearState /> : <GearGrid gears={gears} />}
    </div>
  );
}
