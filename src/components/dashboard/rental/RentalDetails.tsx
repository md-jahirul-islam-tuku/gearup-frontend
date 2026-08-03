import { TRental } from "@/types/rental";

import GearInfoCard from "./GearInfoCard";
import RentalInfoCard from "./RentalInfoCard";
import RentalTimeline from "./RentalTimeline";
import ProviderCard from "./ProviderCard";
import PriceSummary from "./PriceSummary";
import PaymentCard from "./PaymentCard";
import CustomerCard from "./CustomerCard";
import RentalActions from "./RentalActions";
import { getGearReviews } from "@/services/review/getGearReviewsAction";

type Props = {
  rental: TRental;
};

export default async function RentalDetails({ rental }: Props) {
  const reviewed = await getGearReviews(rental.gearItemId);
  return (
    <div className="space-y-8">
      {/* Top Section */}
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GearInfoCard rental={rental} />
        </div>

        <RentalInfoCard rental={rental} />
      </div>

      {/* Timeline + Actions */}
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="space-y-8">
          <RentalTimeline status={rental.status} />

          <RentalActions rental={rental} reviewed={reviewed} />
        </div>

        <ProviderCard provider={rental.gearItem.provider} />
      </div>

      {/* Payment + Customer */}
      <div className="grid gap-8 lg:grid-cols-2">
        <PaymentCard payment={rental.payment} />

        <CustomerCard customer={rental.customer} />
      </div>

      {/* Price */}
      <PriceSummary rental={rental} />
    </div>
  );
}
