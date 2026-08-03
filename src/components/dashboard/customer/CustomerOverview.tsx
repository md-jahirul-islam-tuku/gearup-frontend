import StatsCard from "../cards/StatsCard";

type Props = {
  stats: {
    totalRentals: number;
    activeRentals: number;
    completedRentals: number;
  };
};

export default function CustomerOverview({ stats }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-3 px-4 pt-4 lg:pt-0">
      <StatsCard title="Total Rentals" value={stats.totalRentals} />

      <StatsCard title="Active Rentals" value={stats.activeRentals} />

      <StatsCard title="Completed Rentals" value={stats.completedRentals} />
    </div>
  );
}
