import { RentalTable } from "@/components/dashboard/rental";
import { getMyRentals } from "@/services/rental/getMyRentals";

export default async function RentalsPage() {
  const result = await getMyRentals();

  return (
    <div className="space-y-6 px-4 pt-4 lg:pt-0">
      <h1 className="text-3xl font-bold">My Rentals</h1>

      <RentalTable rentals={result.data} meta={result.meta} />
    </div>
  );
}
