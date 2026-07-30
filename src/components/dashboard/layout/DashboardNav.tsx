"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, User } from "lucide-react";

const items = [
  {
    label: "Dashboard",
    href: "/dashboard/customer",
    icon: LayoutDashboard,
  },
  {
    label: "My Rentals",
    href: "/dashboard/customer/rentals",
    icon: Package,
  },
  {
    label: "Profile",
    href: "/dashboard/customer/profile",
    icon: User,
  },
];

export default function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="space-y-2 p-4">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-lg px-4 py-3 transition
            ${
              pathname === item.href
                ? "bg-primary text-primary-foreground"
                : "hover:bg-muted"
            }`}
          >
            <Icon className="size-5" />

            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
