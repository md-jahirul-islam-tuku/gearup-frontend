import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TGear } from "@/types/gear";

type Props = {
  gear: TGear;
};

export default function RentNowCard({ gear }: Props) {
  return (
    <Card className="space-y-6 p-6">
      <div>
        <h3 className="text-xl font-semibold">Rent this Gear</h3>

        <p className="text-sm text-muted-foreground">
          Continue to checkout to choose rental dates.
        </p>
      </div>

      <Button className="w-full" disabled={!gear.isAvailable}>
        {gear.isAvailable ? "Rent Now" : "Unavailable"}
      </Button>
    </Card>
  );
}
