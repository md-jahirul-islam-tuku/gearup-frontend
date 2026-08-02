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
import { TUsersResponse } from "@/types/user";

type Props = {
  payment: TPayment;
  users: TUsersResponse;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function PaymentDetailsDialog({
  payment,
  users,
  open,
  onOpenChange,
}: Props) {
  const provider = users.data.find(
    (user) => user.id === payment.rentalOrder.gearItem.providerId,
  );
  const gear = payment.rentalOrder.gearItem;
  const customer = payment.rentalOrder.customer;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Payment Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Customer */}
          <section>
            <h3 className="mb-3 font-semibold">Customer</h3>

            <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
              <Info label="Name" value={customer.name} />
              <Info label="Email" value={customer.email} />
              <Info label="Role" value={customer.role} />
              <Info label="Status" value={customer.status} />
            </div>
          </section>

          {/* Provider */}
          <section>
            <h3 className="mb-3 font-semibold">Provider</h3>

            <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
              <Info label="Name" value={provider?.name} />
              <Info label="Email" value={provider?.email} />
              <Info label="Role" value={provider?.role} />
              <Info label="Status" value={provider?.status} />
            </div>
          </section>

          {/* Gear */}
          <section>
            <h3 className="mb-3 font-semibold">Gear Information</h3>

            <div className="space-y-4 rounded-lg border p-4">
              <Image
                src={gear.images[0]}
                alt={gear.name}
                width={800}
                height={400}
                className="h-64 w-full rounded-lg object-cover"
              />

              <div className="grid gap-4 md:grid-cols-2">
                <Info label="Name" value={gear.name} />
                <Info label="Brand" value={gear.brand} />
                <Info label="Category" value={gear.category.name} />
                <Info label="Price / Day" value={`$${gear.pricePerDay}`} />
                <Info label="Stock" value={gear.stock.toString()} />
                <Info
                  label="Available"
                  value={gear.isAvailable ? "Yes" : "No"}
                />
              </div>

              <div>
                <p className="mb-1 text-sm text-muted-foreground">
                  Description
                </p>

                <p>{gear.description}</p>
              </div>
            </div>
          </section>

          {/* Rental */}
          <section>
            <h3 className="mb-3 font-semibold">Rental Information</h3>

            <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
              <Info
                label="Quantity"
                value={payment.rentalOrder.quantity.toString()}
              />

              <Info
                label="Rental Amount"
                value={`$${payment.rentalOrder.totalAmount}`}
              />

              <Info
                label="Start Date"
                value={new Date(
                  payment.rentalOrder.startDate,
                ).toLocaleDateString()}
              />

              <Info
                label="End Date"
                value={new Date(
                  payment.rentalOrder.endDate,
                ).toLocaleDateString()}
              />
            </div>
          </section>

          {/* Payment */}
          <section>
            <h3 className="mb-3 font-semibold">Payment Information</h3>

            <div className="grid gap-4 rounded-lg border p-4 md:grid-cols-2">
              <Info label="Provider" value={payment.provider} />

              <div>
                <p className="text-sm text-muted-foreground">Payment Status</p>

                <PaymentStatusBadge status={payment.status} />
              </div>

              <Info label="Amount" value={`$${payment.amount}`} />

              <Info label="Transaction ID" value={payment.transactionId} />

              <Info label="Stripe Session" value={payment.stripeSessionId} />

              <Info
                label="Paid At"
                value={
                  payment.paidAt
                    ? new Date(payment.paidAt).toLocaleString()
                    : "Not Paid"
                }
              />
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Info({
  label,
  value,
}: {
  label: string;
  value: string | null | undefined;
}) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>

      <p className="break-all font-medium">{value || "-"}</p>
    </div>
  );
}
