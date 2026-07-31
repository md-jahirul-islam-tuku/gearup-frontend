import {
  CreditCard,
  LayoutDashboard,
  Package,
  Settings,
  ShoppingBag,
  User,
  Users,
} from "lucide-react";

import { TUserRole } from "@/types/user";

import { DashboardMenuItem } from "./dashboard.types";

export const dashboardMenus: Record<TUserRole, DashboardMenuItem[]> = {
  CUSTOMER: [
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
  ],

  PROVIDER: [
    {
      label: "Dashboard",
      href: "/dashboard/provider",
      icon: LayoutDashboard,
    },
    {
      label: "My Gears",
      href: "/dashboard/provider/gears",
      icon: ShoppingBag,
    },
    {
      label: "Rentals",
      href: "/dashboard/provider/rentals",
      icon: Package,
    },
    {
      label: "Profile",
      href: "/dashboard/provider/profile",
      icon: User,
    },
  ],

  ADMIN: [
    {
      label: "Dashboard",
      href: "/dashboard/admin",
      icon: LayoutDashboard,
    },
    {
      label: "Users",
      href: "/dashboard/admin/users",
      icon: Users,
    },
    {
      label: "Payments",
      href: "/dashboard/admin/payments",
      icon: CreditCard,
    },
    {
      label: "Settings",
      href: "/dashboard/admin/settings",
      icon: Settings,
    },
  ],
};
