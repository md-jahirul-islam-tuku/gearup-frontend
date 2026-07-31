import { notFound } from "next/navigation";

// import EditGearForm from "@/components/dashboard/provider/gears/EditGearForm";

import { getGear } from "@/services/provider/getGear";
import { getCategories } from "@/services/category/getCategories";
import EditGearForm from "@/components/dashboard/provider/gears/EditGearForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditGearPage({ params }: Props) {
  const { id } = await params;
  const gearResult = await getGear(id);
  const categoryResult = await getCategories();

  if (
    !gearResult.success ||
    !gearResult.data ||
    !categoryResult.success ||
    !categoryResult.data
  ) {
    notFound();
  }

  const result = await getGear(id);

  if (!result.success || !result.data) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Edit Gear</h1>

        <p className="text-muted-foreground">Update your gear information.</p>
      </div>

      <EditGearForm gear={gearResult.data} categories={categoryResult.data} />
    </div>
  );
}
