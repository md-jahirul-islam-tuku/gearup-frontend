import Image from "next/image";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { TGear } from "@/types/gear";

import GearActions from "./GearActions";

type Props = {
  gear: TGear;
};

export default function GearCard({ gear }: Props) {
  return (
    <Card className="overflow-hidden">
      <Image
        src={gear.images?.[0] || "/images/placeholder.png"}
        alt={gear.name}
        width={600}
        height={300}
        className="h-48 w-full object-cover"
      />

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold">{gear.name}</h3>

          <Badge variant={gear.isAvailable ? "default" : "secondary"}>
            {gear.isAvailable ? "Available" : "Unavailable"}
          </Badge>
        </div>

        <p className="text-muted-foreground line-clamp-2 text-sm">
          {gear.description}
        </p>

        <div className="space-y-1 text-sm">
          <p>Brand: {gear.brand}</p>

          <p>Category: {gear.category?.name}</p>

          <p>Stock: {gear.stock}</p>

          <p>${gear.pricePerDay}/day</p>
        </div>

        <GearActions gear={gear} />
      </div>
    </Card>
  );
}
