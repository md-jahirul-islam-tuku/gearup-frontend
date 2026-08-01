import getDashboardStats from "@/services/admin/getDashboardStats";
import StatsGrid from "@/components/dashboard/admin/dashboard/StatsGrid";

export default async function AdminDashboardPage() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">All Stats</h1>

      <StatsGrid stats={stats} />
    </div>
  );
}
