import { Badge } from "@/components/ui/badge";
import { TGear } from "@/types/gear";

type Props = {
  gear: TGear;
};

export default function GearInfo({ gear }: Props) {
  return (
    <div className="space-y-5">
      <Badge>{gear.category.name}</Badge>

      <h1 className="text-4xl font-bold">{gear.name}</h1>

      <p className="text-muted-foreground">{gear.description}</p>

      <div className="space-y-2 text-sm">
        <p>
          <span className="font-semibold">Brand:</span> {gear.brand}
        </p>

        <p>
          <span className="font-semibold">Stock:</span> {gear.stock}
        </p>

        <p>
          <span className="font-semibold">Availability:</span>{" "}
          {gear.isAvailable ? "Available" : "Unavailable"}
        </p>
      </div>

      <h2 className="text-3xl font-bold text-primary">
        ${gear.pricePerDay}/day
      </h2>
    </div>
  );
}
