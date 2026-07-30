import { TRental } from "@/types/rental";

import GearInfoCard from "./GearInfoCard";
import RentalInfoCard from "./RentalInfoCard";
import RentalTimeline from "./RentalTimeline";
import ProviderCard from "./ProviderCard";
import PriceSummary from "./PriceSummary";
import PaymentCard from "./PaymentCard";
import CustomerCard from "./CustomerCard";

type Props = {
  rental: TRental;
};

export default function RentalDetails({ rental }: Props) {
  return (
    <div className="space-y-8">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <GearInfoCard rental={rental} />
        </div>

        <RentalInfoCard rental={rental} />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <RentalTimeline status={rental.status} />

        <ProviderCard provider={rental.gearItem.provider} />
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <PaymentCard payment={rental.payment} />

        <CustomerCard customer={rental.customer} />
      </div>

      <PriceSummary rental={rental} />
    </div>
  );
}
