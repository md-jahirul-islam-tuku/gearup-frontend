import CustomerOverview from "@/components/dashboard/customer/CustomerOverview";
import { getMyRentals } from "@/services/rental/getMyRentals";
import { getRentalStats } from "@/lib/rental-stats";

export default async function CustomerDashboardPage() {
  const result = await getMyRentals();

  const rentals = result.data ?? [];

  const stats = getRentalStats(rentals);

  return <CustomerOverview stats={stats} />;
}
