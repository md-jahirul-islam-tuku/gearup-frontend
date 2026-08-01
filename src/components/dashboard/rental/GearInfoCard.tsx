import Image from "next/image";

import { Card } from "@/components/ui/card";

import { TRental } from "@/types/rental";

type Props = {
  rental: TRental;
};

export default function GearInfoCard({ rental }: Props) {
  const gear = rental.gearItem;

  return (
    <Card className="overflow-hidden">
      <Image
        src={gear.images[0]}
        alt={gear.name}
        width={900}
        height={500}
        className="h-80 w-full object-cover"
      />

      <div className="space-y-3 p-6">
        <h2 className="text-2xl font-bold">{gear.name}</h2>

        <p className="text-muted-foreground">{gear.description}</p>

        <div className="grid gap-2 text-sm md:grid-cols-2">
          <p>
            <span className="font-medium">Category:</span> {gear.category.name}
          </p>

          <p>
            <span className="font-medium">Brand:</span> {gear.brand}
          </p>

          <p>
            <span className="font-medium">Price / Day:</span> $
            {gear.pricePerDay}
          </p>
        </div>
      </div>
    </Card>
  );
}
