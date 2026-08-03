import AppPagination from "@/components/shared/pagination/AppPagination";

import { TCategory, TCategoriesResponse } from "@/types/category";

import CategoryRow from "./CategoryRow";

type Props = {
  categories: TCategory[];
  meta: TCategoriesResponse["data"]["meta"];
};

export default function CategoryTable({ categories, meta }: Props) {
  if (!categories?.length) {
    return (
      <div className="rounded-xl border py-20 text-center text-muted-foreground">
        No categories found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-187.5">
          <thead className="bg-muted">
            <tr>
              <th className="whitespace-nowrap p-4 text-left">Name</th>

              <th className="whitespace-nowrap p-4 text-left">Slug</th>

              <th className="whitespace-nowrap p-4 text-left">Description</th>

              <th className="whitespace-nowrap p-4 text-left">Created</th>

              <th className="whitespace-nowrap p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {categories.map((category) => (
              <CategoryRow key={category.id} category={category} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      {/* Result Count */}
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {categories.length} of {meta.total} categories
      </div>
    </div>
  );
}
