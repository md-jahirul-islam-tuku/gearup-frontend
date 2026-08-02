import GearTable from "@/components/dashboard/admin/gears/GearTable";
import { getAllGears } from "@/services/admin/getAllGears";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function AdminGearsPage({ searchParams }: Props) {
  const { page } = await searchParams;

  const result = await getAllGears(page);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Gear Management</h1>

      <GearTable gears={result.data} meta={result.meta} />
    </div>
  );
}
