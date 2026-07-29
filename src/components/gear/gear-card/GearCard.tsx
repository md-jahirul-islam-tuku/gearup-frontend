import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import { TGear } from "@/types/gear";

type GearCardProps = {
  gear: TGear;
};

export default function GearCard({ gear }: GearCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-4/3">
        <Image
          src={gear.images?.[0] || "/placeholder/gear-placeholder.png"}
          alt={gear.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="space-y-4 p-5">
        <div>
          <h3 className="line-clamp-1 text-lg font-semibold">{gear.name}</h3>

          <p className="text-sm text-muted-foreground">{gear.brand}</p>
        </div>

        <p className="font-semibold text-primary">${gear.pricePerDay}/day</p>

        <Link href={`/gear/${gear.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </div>
    </Card>
  );
}
