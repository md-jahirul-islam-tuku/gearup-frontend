"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

import { TRental } from "@/types/rental";

import RentalStatusBadge from "./RentalStatusBadge";
import UpdateRentalStatus from "./UpdateRentalStatus";

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
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Rental Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Gear */}

          <div className="flex gap-4">
            <Image
              src={rental.gearItem.images[0]}
              alt={rental.gearItem.name}
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />

            <div className="space-y-1">
              <h3 className="font-semibold">{rental.gearItem.name}</h3>

              <p className="text-sm text-muted-foreground">
                {rental.gearItem.category.name}
              </p>

              <RentalStatusBadge status={rental.status} />
            </div>
          </div>

          <Separator />

          {/* Customer */}

          <div>
            <h4 className="mb-3 font-semibold">Customer</h4>

            <div className="grid gap-2">
              <p>
                <strong>Name:</strong> {rental.customer.name}
              </p>

              <p>
                <strong>Email:</strong> {rental.customer.email}
              </p>
            </div>
          </div>

          <Separator />

          {/* Rental */}

          <div>
            <h4 className="mb-3 font-semibold">Rental Information</h4>

            <div className="grid grid-cols-2 gap-4">
              <p>
                <strong>Quantity</strong>
                <br />
                {rental.quantity}
              </p>

              <p>
                <strong>Total</strong>
                <br />${rental.totalAmount}
              </p>

              <p>
                <strong>Start Date</strong>
                <br />
                {new Date(rental.startDate).toLocaleDateString()}
              </p>

              <p>
                <strong>End Date</strong>
                <br />
                {new Date(rental.endDate).toLocaleDateString()}
              </p>
            </div>
          </div>
          <Separator />

          <UpdateRentalStatus
            rental={rental}
            onSuccess={() => onOpenChange(false)}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
