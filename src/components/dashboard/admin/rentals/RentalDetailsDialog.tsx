"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { TRental } from "@/types/rental";
import { RentalStatusBadge } from "../../rental";

type Props = {
  rental: TRental;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function RentalDetailsDialog({
  rental,
  open,
  onOpenChange,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Rental Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Customer */}
          <section>
            <h3 className="mb-3 font-semibold">Customer</h3>

            <div className="grid gap-3 rounded-lg border p-4 md:grid-cols-2">
              <Info label="Name" value={rental.customer.name} />
              <Info label="Email" value={rental.customer.email} />
              <Info label="Role" value={rental.customer.role} />
              <Info label="Status" value={rental.customer.status} />
            </div>
          </section>

          {/* Provider */}
          <section>
            <h3 className="mb-3 font-semibold">Provider</h3>

            <div className="grid gap-3 rounded-lg border p-4 md:grid-cols-2">
              <Info label="Name" value={rental.gearItem.provider.name} />

              <Info label="Email" value={rental.gearItem.provider.email} />

              <Info label="Role" value={rental.gearItem.provider.role} />

              <Info label="Status" value={rental.gearItem.provider.status} />
            </div>
          </section>

          {/* Gear */}
          <section>
            <h3 className="mb-3 font-semibold">Gear</h3>

            <div className="space-y-4 rounded-lg border p-4">
              <Image
                src={rental.gearItem.images[0]}
                alt={rental.gearItem.name}
                width={700}
                height={350}
                className="h-60 w-full rounded-lg object-cover"
              />

              <div className="grid gap-3 md:grid-cols-2">
                <Info label="Name" value={rental.gearItem.name} />

                <Info label="Brand" value={rental.gearItem.brand} />

                <Info label="Category" value={rental.gearItem.category.name} />

                <Info
                  label="Price / Day"
                  value={`$${rental.gearItem.pricePerDay}`}
                />

                <Info label="Stock" value={String(rental.gearItem.stock)} />

                <Info
                  label="Available"
                  value={rental.gearItem.isAvailable ? "Yes" : "No"}
                />
              </div>

              <div>
                <p className="mb-1 text-sm font-medium">Description</p>

                <p className="text-sm text-muted-foreground">
                  {rental.gearItem.description}
                </p>
              </div>
            </div>
          </section>

          {/* Rental */}
          <section>
            <h3 className="mb-3 font-semibold">Rental</h3>

            <div className="grid gap-3 rounded-lg border p-4 md:grid-cols-2">
              <Info label="Quantity" value={String(rental.quantity)} />

              <Info label="Total Amount" value={`$${rental.totalAmount}`} />

              <Info
                label="Start Date"
                value={new Date(rental.startDate).toLocaleDateString()}
              />

              <Info
                label="End Date"
                value={new Date(rental.endDate).toLocaleDateString()}
              />

              <div>
                <p className="text-sm text-muted-foreground">Status</p>

                <RentalStatusBadge status={rental.status} />
              </div>

              <Info
                label="Created"
                value={new Date(rental.createdAt).toLocaleString()}
              />
            </div>
          </section>

          {/* Payment */}
          <section>
            <h3 className="mb-3 font-semibold">Payment</h3>

            <div className="grid gap-3 rounded-lg border p-4 md:grid-cols-2">
              <Info label="Provider" value={rental.payment?.provider ?? "-"} />

              <Info label="Status" value={rental.payment?.status ?? "-"} />

              <Info
                label="Amount"
                value={`$ ${rental.payment?.amount ?? "-"}`}
              />

              <Info
                label="Transaction"
                value={rental.payment?.transactionId ?? "-"}
              />

              <Info
                label="Stripe Session"
                value={rental.payment?.stripeSessionId ?? "-"}
              />

              <Info
                label="Paid At"
                value={
                  rental.payment?.paidAt
                    ? new Date(rental.payment.paidAt).toLocaleString()
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

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>
      <p className="break-all font-medium">{value}</p>
    </div>
  );
}
