import AppPagination from "@/components/shared/pagination/AppPagination";
import { TCategory, TCategoriesResponse } from "@/types/category";
import CategoryRow from "./CategoryRow";

type Props = {
  categories: TCategory[];
  meta: TCategoriesResponse["data"]["meta"];
};

export default function CategoryTable({ categories, meta }: Props) {
  if (!categories.length) {
    return (
      <div className="rounded-xl border py-20 text-center text-muted-foreground">
        No categories found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-left">Name</th>
            <th>Slug</th>
            <th>Description</th>
            <th>Created</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {categories.map((category) => (
            <CategoryRow key={category.id} category={category} />
          ))}
        </tbody>
      </table>

      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {categories.length} of {meta.total} categories
      </div>
    </div>
  );
}
