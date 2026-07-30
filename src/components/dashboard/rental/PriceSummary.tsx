import { Card } from "@/components/ui/card";

import { TRental } from "@/types/rental";

type Props = {
  rental: TRental;
};

export default function PriceSummary({
  rental,
}: Props) {
  const days =
    Math.ceil(
      (new Date(rental.endDate).getTime() -
        new Date(rental.startDate).getTime()) /
        (1000 * 60 * 60 * 24),
    ) + 1;

  const subtotal =
    Number(rental.gearItem.pricePerDay) *
    rental.quantity *
    days;

  return (
    <Card className="space-y-4 p-6">
      <h3 className="text-xl font-semibold">
        Price Summary
      </h3>

      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Price / Day</span>

          <span>${rental.gearItem.pricePerDay}</span>
        </div>

        <div className="flex justify-between">
          <span>Days</span>

          <span>{days}</span>
        </div>

        <div className="flex justify-between">
          <span>Quantity</span>

          <span>{rental.quantity}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>

          <span>${subtotal}</span>
        </div>

        <div className="border-t pt-3 font-bold flex justify-between">
          <span>Total</span>

          <span>${rental.totalAmount}</span>
        </div>
      </div>
    </Card>
  );
}