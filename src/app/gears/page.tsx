import GearPage from "@/components/gears/GearPage";
import { getAllGear } from "@/services/gears/getAllGear";
import { getCategories } from "@/services/gears/getCategories";

type Props = {
  searchParams: Promise<{
    page?: string;
    limit?: string;

    searchTerm?: string;

    category?: string;
    brand?: string;

    minPrice?: string;
    maxPrice?: string;

    sortBy?: string;
    sortOrder?: "asc" | "desc";

    startDate?: string;
    endDate?: string;
  }>;
};

export default async function Page({ searchParams }: Props) {
  const categories = await getCategories();
  const params = await searchParams;

  const result = await getAllGear({
    page: params.page ? Number(params.page) : 1,
    limit: params.limit ? Number(params.limit) : 12,

    searchTerm: params.searchTerm,

    category: params.category,
    brand: params.brand,

    minPrice: params.minPrice,
    maxPrice: params.maxPrice,

    sortBy: params.sortBy,
    sortOrder: params.sortOrder,

    startDate: params.startDate,
    endDate: params.endDate,
  });

  return <GearPage result={result} categories={categories} />;
}
