import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import DashboardHeader from "./DashboardHeader";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto flex max-w-7xl">
        <DashboardSidebar />

        <main className="flex-1">
          <DashboardHeader />

          <div className="p-6">{children}</div>
        </main>
      </div>
    </div>
  );
}
