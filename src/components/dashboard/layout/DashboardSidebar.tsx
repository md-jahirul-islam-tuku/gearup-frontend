import DashboardNav from "./DashboardNav";
import DashboardUser from "./DashboardUser";

import { DashboardSidebarProps } from "./dashboard.types";

export default function DashboardSidebar({
  role,
  user,
}: DashboardSidebarProps) {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 flex-col border-r bg-background lg:flex">
      {/* Logo */}
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">GearUp</h2>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto">
        <DashboardNav role={role} />
      </div>

      {/* User */}
      <div className="border-t p-4">
        <DashboardUser user={user} />
      </div>
    </aside>
  );
}
