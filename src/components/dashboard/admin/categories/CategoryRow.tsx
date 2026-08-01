import { format } from "date-fns";

import { TCategory } from "@/types/category";
import CategoryActions from "./CategoryActions";

type Props = {
  category: TCategory;
};

export default function CategoryRow({ category }: Props) {
  return (
    <tr className="border-b">
      <td className="p-4 font-medium">{category.name}</td>

      <td>{category.slug}</td>

      <td className="max-w-sm truncate">{category.description}</td>

      <td>{format(new Date(category.createdAt), "dd MMM yyyy")}</td>

      <td>
        <CategoryActions category={category} />
      </td>
    </tr>
  );
}
