import { TGear } from "@/types/gear";
import GearCard from "./GearCard";

type Props = {
  gears: TGear[];
};

export default function GearGrid({ gears }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {gears.map((gear) => (
        <GearCard key={gear.id} gear={gear} />
      ))}
    </div>
  );
}
