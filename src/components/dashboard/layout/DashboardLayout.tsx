import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

import { DashboardLayoutProps } from "./dashboard.types";

export default function DashboardLayout({
  title,
  role,
  user,
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto flex max-w-7xl">
        <DashboardSidebar role={role} user={user} />

        <main className="min-w-0 flex-1">
          <DashboardHeader title={title} />

          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
