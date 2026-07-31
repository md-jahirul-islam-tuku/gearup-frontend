import { DashboardHeaderProps } from "./dashboard.types";

export default function DashboardHeader({ title }: DashboardHeaderProps) {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-6">
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
}
