import { TGear } from "@/types/gear";

import GearGallery from "./GearGallery";
import GearInfo from "./GearInfo";
import ProviderInfo from "./ProviderInfo";
import RentNowCard from "./RentNowCard";
import ReviewList from "./ReviewList";

type Props = {
  gear: TGear;
};

export default function GearDetails({ gear }: Props) {
  return (
    <div className="space-y-14 mx-auto max-w-6xl">
      <div className="grid gap-10 lg:grid-cols-2">
        <GearGallery images={gear.images} />

        <div className="space-y-8">
          <GearInfo gear={gear} />

          <RentNowCard gear={gear} />
        </div>
      </div>

      <ProviderInfo provider={gear.provider} />

      <ReviewList gearId={gear.id} />
    </div>
  );
}
