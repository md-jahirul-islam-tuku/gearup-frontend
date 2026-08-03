"use client";

import PayNowButton from "@/components/checkout/PayNowButton";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import ReviewButton from "../review/ReviewButton";

import { TRental } from "@/types/rental";
import { TGearReviewsResponse } from "@/types/review";

type Props = {
  rental: TRental;
  reviewed: TGearReviewsResponse;
};

export default function RentalActions({ rental, reviewed }: Props) {
  const rentalStatus = rental.status;
  const paymentStatus = rental.payment?.status;

  // Assignment Flow:
  // PLACED -> CONFIRMED -> PAID -> PICKED_UP -> RETURNED
  const canPay = rentalStatus === "CONFIRMED" && paymentStatus !== "PAID";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Waiting Confirmation */}
        {rentalStatus === "PLACED" && (
          <Badge
            variant="secondary"
            className="w-full justify-center py-4 text-lg"
          >
            Waiting for Provider Confirmation
          </Badge>
        )}

        {/* Pay Now */}
        {canPay && <PayNowButton rentalId={rental.id} />}

        {/* Payment Completed */}
        {rentalStatus === "CONFIRMED" && paymentStatus === "PAID" && (
          <Badge
            className="w-full justify-center bg-green-100 py-4 text-lg text-green-700
              dark:bg-green-900/30 dark:text-green-400"
          >
            Payment Completed
          </Badge>
        )}

        {/* Customer has the gear */}
        {rentalStatus === "PICKED_UP" && (
          <Badge
            variant="secondary"
            className="w-full justify-center py-4 text-lg"
          >
            Enjoy your rental 🎉
          </Badge>
        )}

        {/* Returned */}
        {rentalStatus === "RETURNED" && (
          <ReviewButton
            rentalOrderId={rental.id}
            gearItemId={rental.gearItem.id}
            reviewed={reviewed.success}
          />
        )}

        {/* Cancelled */}
        {rentalStatus === "CANCELLED" && (
          <Badge
            variant="destructive"
            className="w-full justify-center py-4 text-lg"
          >
            Rental Cancelled
          </Badge>
        )}
      </CardContent>
    </Card>
  );
}
