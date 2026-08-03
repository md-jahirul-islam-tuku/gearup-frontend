"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { dashboardMenus } from "./dashboard-menu";
import { DashboardNavProps } from "./dashboard.types";

type Props = DashboardNavProps & {
  onNavigate?: () => void;
};

export default function DashboardNav({ role, onNavigate }: Props) {
  const pathname = usePathname();

  const items = dashboardMenus[role];

  return (
    <nav className="space-y-2 px-4 sm:px-6 lg:px-8">
      {items.map((item) => {
        const Icon = item.icon;

        const active =
          pathname === item.href || pathname.startsWith(`${item.href}/`);

        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition ${
              active ? "bg-primary text-primary-foreground" : "hover:bg-muted"
            }`}
          >
            <Icon className="size-5 shrink-0" />

            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
