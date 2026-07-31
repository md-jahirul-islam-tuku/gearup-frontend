import { LucideIcon } from "lucide-react";

import { TUser, TUserRole } from "@/types/user";

export type DashboardMenuItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type DashboardSidebarProps = {
  role: TUserRole;
  user: TUser;
};

export type DashboardNavProps = {
  role: TUserRole;
};

export type DashboardHeaderProps = {
  title: string;
};

export type DashboardLayoutProps = {
  title: string;
  role: TUserRole;
  user: TUser;
  children: React.ReactNode;
};
