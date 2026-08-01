import { getProviderRentals } from "@/services/provider/getProviderRentals";

import RentalEmpty from "@/components/dashboard/provider/rentals/RentalEmpty";
import { RentalTable } from "@/components/dashboard/rental";
import RentalFilters from "@/components/dashboard/provider/rentals/RentalFilters";

type Props = {
  searchParams: Promise<{
    page?: string;
    status?: string;
    searchTerm?: string;
  }>;
};

export default async function ProviderRentalsPage({ searchParams }: Props) {
  const query = await searchParams;

  const result = await getProviderRentals(query);

  if (!result.success || !result.data) {
    return <RentalEmpty />;
  }

  return (
    <div>
      <RentalFilters />
      <RentalTable rentals={result.data.data} meta={result.data.meta} />
    </div>
  );
}
