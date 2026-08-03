"use client";

import { useTransition } from "react";

import { Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";

import { createCheckoutAction } from "@/actions/payment/createCheckoutAction";

type Props = {
  rentalId: string;
};

export default function PayNowButton({ rentalId }: Props) {
  const [isPending, startTransition] = useTransition();

  const handleCheckout = () => {
    startTransition(async () => {
      const result = await createCheckoutAction(rentalId);

      if (result?.checkoutUrl) {
        window.location.href = result.checkoutUrl;
      }
    });
  };

  return (
    <Button size="lg" disabled={isPending} onClick={handleCheckout}>
      {isPending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Redirecting...
        </>
      ) : (
        "Pay Now"
      )}
    </Button>
  );
}
