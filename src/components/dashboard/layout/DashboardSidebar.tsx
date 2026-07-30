import DashboardNav from "./DashboardNav";
import DashboardUser from "./DashboardUser";

export default function DashboardSidebar() {
  return (
    <aside className="sticky top-0 h-screen w-72 border-r bg-background">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">GearUp</h2>
      </div>

      <DashboardNav />

      <div className="mt-auto p-6">
        <DashboardUser />
      </div>
    </aside>
  );
}
