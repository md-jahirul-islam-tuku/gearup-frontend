import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TGear } from "@/types/gear";
import Link from "next/link";

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
      <Link href={`/gear/${gear.id}/rent`}>
        <Button className="w-full">
          {gear.isAvailable ? "Rent Now" : "Unavailable"}
        </Button>
      </Link>
    </Card>
  );
}
