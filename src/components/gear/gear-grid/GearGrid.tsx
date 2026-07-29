import { TGear } from "@/types/gear";
import GearCard from "../gear-card/GearCard";
import EmptyGear from "../empty-state/EmptyGear";

type Props = {
  gears: TGear[];
};

export default function GearGrid({ gears }: Props) {
  if (!gears.length) {
    return <EmptyGear />;
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {gears.map((gear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
}
