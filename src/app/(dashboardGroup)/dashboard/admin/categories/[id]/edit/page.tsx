import { notFound } from "next/navigation";

import EditCategoryForm from "@/components/dashboard/admin/categories/EditCategoryForm";
import { getCategory } from "@/services/admin/getCategory";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditCategoryPage({ params }: Props) {
  const { id } = await params;

  const result = await getCategory(id);

  if (!result.success || !result.data) {
    notFound();
  }

  return (
    <div className="space-y-6 p-4 lg:p-4">
      <h1 className="text-3xl font-bold">Edit Category</h1>

      <EditCategoryForm category={result.data} />
    </div>
  );
}
