import { Card } from "@/components/ui/card";

import { TRental } from "@/types/rental";

import RentalStatusBadge from "./RentalStatusBadge";

type Props = {
  rental: TRental;
};

export default function RentalInfoCard({ rental }: Props) {
  return (
    <Card className="space-y-5 p-6">
      <h3 className="text-xl font-semibold">Rental Summary</h3>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Status</span>

          <RentalStatusBadge status={rental.status} />
        </div>

        <div className="flex justify-between">
          <span>Quantity</span>

          <span>{rental.quantity}</span>
        </div>

        <div className="flex justify-between">
          <span>Start</span>

          <span>{rental.startDate}</span>
        </div>

        <div className="flex justify-between">
          <span>End</span>

          <span>{rental.endDate}</span>
        </div>

        <div className="flex justify-between font-semibold">
          <span>Total</span>

          <span>${rental.totalAmount}</span>
        </div>
      </div>
    </Card>
  );
}
