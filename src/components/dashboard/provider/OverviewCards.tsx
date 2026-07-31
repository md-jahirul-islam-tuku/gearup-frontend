import { Card } from "@/components/ui/card";

type Props = {
  totalGears: number;
  availableGears: number;
  rentedGears: number;
  totalRevenue: number;
};

export default function OverviewCards({
  totalGears,
  availableGears,
  rentedGears,
  totalRevenue,
}: Props) {
  const cards = [
    {
      title: "Total Gears",
      value: totalGears,
    },
    {
      title: "Available",
      value: availableGears,
    },
    {
      title: "Currently Rented",
      value: rentedGears,
    },
    {
      title: "Revenue",
      value: `$${totalRevenue}`,
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => (
        <Card key={card.title} className="p-6">
          <p className="text-muted-foreground text-sm">{card.title}</p>

          <h2 className="mt-3 text-3xl font-bold">{card.value}</h2>
        </Card>
      ))}
    </div>
  );
}
