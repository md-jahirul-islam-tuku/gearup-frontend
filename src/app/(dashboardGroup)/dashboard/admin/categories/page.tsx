import CategoryTable from "@/components/dashboard/admin/categories/CategoryTable";
import { Button } from "@/components/ui/button";

import { getCategories } from "@/services/admin/getCategories";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    page?: string;
    searchTerm?: string;
  }>;
};

export default async function CategoriesPage({ searchParams }: Props) {
  const query = await searchParams;

  const result = await getCategories(query);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Categories</h1>

        <Button>
          <Link href="/dashboard/admin/categories/create">Create Category</Link>
        </Button>
      </div>

      <CategoryTable categories={result.data?.data} meta={result.data?.meta} />
    </div>
  );
}
