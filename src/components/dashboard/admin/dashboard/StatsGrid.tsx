import {
  Users,
  UserCheck,
  Package,
  Boxes,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { TDashboardStats } from "@/services/admin/getDashboardStats";

type Props = {
  stats: TDashboardStats;
};

export default function StatsGrid({ stats }: Props) {
  const cards = [
    {
      title: "Total Users",
      value: stats.totalUsers,
      icon: Users,
    },
    {
      title: "Customers",
      value: stats.totalCustomers,
      icon: UserCheck,
    },
    {
      title: "Providers",
      value: stats.totalProviders,
      icon: Package,
    },
    {
      title: "Total Gears",
      value: stats.totalGears,
      icon: Boxes,
    },
    {
      title: "Available Gears",
      value: stats.availableGears,
      icon: CheckCircle,
    },
    {
      title: "Rentals",
      value: stats.totalRentals,
      icon: ShoppingBag,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {card.title}
              </CardTitle>

              <Icon className="size-5 text-muted-foreground" />
            </CardHeader>

            <CardContent>
              <p className="text-3xl font-bold">{card.value}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
