"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { TPayment } from "@/types/payment";

import PaymentStatusBadge from "./PaymentStatusBadge";
import { RentalStatusBadge } from "../../rental";

type Props = {
  payment: TPayment;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PaymentDetailsDialog({
  payment,
  open,
  onOpenChange,
}: Props) {
  const gear = payment.rentalOrder.gearItem;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Payment Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          <Image
            src={gear.images[0]}
            alt={gear.name}
            width={800}
            height={400}
            className="h-64 w-full rounded-lg object-cover"
          />

          <Section title="Gear">
            <Info label="Name" value={gear.name} />
            <Info label="Brand" value={gear.brand} />
            <Info label="Category" value={gear.category.name} />
            <Info label="Price / Day" value={`$${gear.pricePerDay}`} />
          </Section>

          <Section title="Rental">
            <Info
              label="Quantity"
              value={String(payment.rentalOrder.quantity)}
            />

            <Info label="Start" value={payment.rentalOrder.startDate} />

            <Info label="End" value={payment.rentalOrder.endDate} />

            <div>
              <p className="text-sm text-muted-foreground">Rental Status</p>

              <RentalStatusBadge status={payment.rentalOrder.status} />
            </div>
          </Section>

          <Section title="Payment">
            <Info label="Transaction" value={payment.transactionId} />

            <Info label="Stripe Session" value={payment.stripeSessionId} />

            <Info label="Provider" value={payment.provider} />

            <Info label="Amount" value={`$${payment.amount}`} />

            <div>
              <p className="text-sm text-muted-foreground">Status</p>

              <PaymentStatusBadge status={payment.status} />
            </div>

            <Info
              label="Paid At"
              value={new Date(payment.paidAt).toLocaleString()}
            />
          </Section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Section({
  title,
  children,
}: React.PropsWithChildren<{
  title: string;
}>) {
  return (
    <section>
      <h3 className="mb-3 font-semibold">{title}</h3>

      <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
        {children}
      </div>
    </section>
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
