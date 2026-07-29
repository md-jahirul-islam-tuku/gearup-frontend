import Image from "next/image";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { TGear } from "@/types/gear";

type Props = {
  gear: TGear;
};

export default function GearCard({ gear }: Props) {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-lg">
      {gear.images && (
        <Image
          src={gear.images?.[0]}
          alt={gear.name}
          width={400}
          height={400}
          className="w-full h-64 object-cover"
        />
      )}

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-xl font-semibold">{gear.name}</h3>

          <p className="text-sm text-muted-foreground">{gear.brand}</p>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-bold text-primary">
            ${gear.pricePerDay}/day
          </span>

          <span className="text-sm text-muted-foreground">
            Stock {gear.stock}
          </span>
        </div>

        <Link href={`/gear/${gear.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  );
}
