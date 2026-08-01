import RentalTable from "@/components/dashboard/admin/rentals/RentalTable";
import { getAdminRentals } from "@/services/admin/getAdminRentals";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function AdminRentalsPage({ searchParams }: Props) {
  const { page } = await searchParams;

  const result = await getAdminRentals(page);
  console.log(result);
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Rentals</h1>

      <RentalTable rentals={result.data} meta={result.meta} />
    </div>
  );
}
