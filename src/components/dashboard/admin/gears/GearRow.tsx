import Image from "next/image";

import GearActions from "./GearActions";

import { Badge } from "@/components/ui/badge";

import { TGear } from "@/types/gear";

type Props = {
  gear: TGear;
};

export default function GearRow({ gear }: Props) {
  return (
    <tr className="border-t">
      {/* Gear */}

      <td className="p-4">
        <div className="flex items-center gap-3">
          <Image
            src={gear.images[0]}
            alt={gear.name}
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />

          <div>
            <p className="font-medium">{gear.name}</p>

            <p className="text-sm text-muted-foreground">{gear.brand}</p>
          </div>
        </div>
      </td>

      {/* Provider */}

      <td className="text-center">
        <div>
          <p>{gear.provider.name}</p>

          <p className="text-xs text-muted-foreground">{gear.provider.email}</p>
        </div>
      </td>

      {/* Category */}

      <td className="text-center">{gear.category.name}</td>

      {/* Price */}

      <td className="text-center">${gear.pricePerDay}</td>

      {/* Stock */}

      <td className="text-center">{gear.stock}</td>

      {/* Available */}

      <td className="text-center">
        {gear.isAvailable ? (
          <Badge>Available</Badge>
        ) : (
          <Badge variant="destructive">Out of Stock</Badge>
        )}
      </td>

      {/* Actions */}

      <td className="text-center">
        <GearActions gear={gear} />
      </td>
    </tr>
  );
}
