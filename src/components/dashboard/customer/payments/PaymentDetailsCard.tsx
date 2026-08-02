import Image from "next/image";

import PaymentStatusBadge from "./PaymentStatusBadge";

import { RentalStatusBadge } from "../../rental";

import { TPayment } from "@/types/payment";

type Props = {
  payment: TPayment;
};

export default function PaymentDetailsCard({ payment }: Props) {
  const gear = payment.rentalOrder.gearItem;

  return (
    <div className="space-y-8">
      <Image
        src={gear.images[0]}
        alt={gear.name}
        width={1000}
        height={500}
        className="h-72 w-full rounded-xl object-cover"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border p-6 space-y-4">
          <h2 className="font-semibold">Gear Information</h2>

          <Info label="Name" value={gear.name} />

          <Info label="Brand" value={gear.brand} />

          <Info label="Category" value={gear.category.name} />

          <Info label="Price / Day" value={`$${gear.pricePerDay}`} />
        </div>

        <div className="rounded-xl border p-6 space-y-4">
          <h2 className="font-semibold">Payment Information</h2>

          <Info label="Transaction ID" value={payment.transactionId} />

          <Info label="Amount" value={`$${payment.amount}`} />

          <Info label="Provider" value={payment.provider} />

          <div>
            <p className="text-sm text-muted-foreground">Payment Status</p>

            <PaymentStatusBadge status={payment.status} />
          </div>

          <div>
            <p className="text-sm text-muted-foreground">Rental Status</p>

            <RentalStatusBadge status={payment.rentalOrder.status} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>

      <p className="break-all font-medium">{value}</p>
    </div>
  );
}
