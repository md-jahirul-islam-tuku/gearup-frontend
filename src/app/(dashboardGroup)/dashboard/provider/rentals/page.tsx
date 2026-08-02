import { getProviderRentals } from "@/services/provider/getProviderRentals";

import RentalEmpty from "@/components/dashboard/provider/rentals/RentalEmpty";
import RentalFilters from "@/components/dashboard/provider/rentals/RentalFilters";
import ProviderRentalsTable from "@/components/dashboard/provider/rentals/RentalTable";

type Props = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
    status?: string;
    searchTerm?: string;
  }>;
};

export default async function ProviderRentalsPage({ searchParams }: Props) {
  const query = await searchParams;

  const result = await getProviderRentals({
    page: Number(query.page) || 1,
    status: query.status,
    searchTerm: query.searchTerm,
  });

  if (!result.success || !result.data) {
    return <RentalEmpty />;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">My Rentals</h1>
        </div>
        <RentalFilters />
      </div>
      <ProviderRentalsTable
        rentals={result.data.data}
        meta={result.data.meta}
      />
    </div>
  );
}
