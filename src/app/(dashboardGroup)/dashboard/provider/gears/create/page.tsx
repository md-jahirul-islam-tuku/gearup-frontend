import { notFound } from "next/navigation";

import CreateGearForm from "@/components/dashboard/provider/gears/CreateGearForm";
import { getCategories } from "@/services/admin/getCategories";

export default async function CreateGearPage() {
  const categoryResult = await getCategories();

  if (!categoryResult.success || !categoryResult.data) {
    notFound();
  }

  return (
    <div className="space-y-6 p-4 lg:p-4">
      <div>
        <h1 className="text-3xl font-bold">Add New Gear</h1>

        <p className="text-muted-foreground">Create a new gear listing.</p>
      </div>

      <CreateGearForm categories={categoryResult.data.data} />
    </div>
  );
}
