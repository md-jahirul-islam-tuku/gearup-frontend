import { TProviderOverview } from "@/types/provider";

import OverviewCards from "./OverviewCards";
import RevenueSummary from "./RevenueSummary";
import RecentRentals from "./RecentRentals";

type Props = {
  overview: TProviderOverview;
};

export default function ProviderOverview({ overview }: Props) {
  return (
    <div className="space-y-8 p-4 lg:p-4">
      <OverviewCards
        totalGears={overview.totalGears}
        availableGears={overview.availableGears}
        rentedGears={overview.rentedGears}
        totalRevenue={overview.totalRevenue}
      />

      <RevenueSummary />

      <RecentRentals rentals={overview.recentRentals} />
    </div>
  );
}
