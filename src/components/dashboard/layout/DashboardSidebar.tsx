import DashboardNav from "./DashboardNav";
import DashboardUser from "./DashboardUser";

import { DashboardSidebarProps } from "./dashboard.types";

export default function DashboardSidebar({
  role,
  user,
}: DashboardSidebarProps) {
  return (
    <aside className="sticky top-0 flex h-screen w-72 flex-col border-r bg-background">
      <div className="border-b p-6">
        <h2 className="text-2xl font-bold">GearUp</h2>
      </div>

      <div className="flex-1 overflow-y-auto">
        <DashboardNav role={role} />
      </div>

      <div className="border-t p-4">
        <DashboardUser user={user} />
      </div>
    </aside>
  );
}
