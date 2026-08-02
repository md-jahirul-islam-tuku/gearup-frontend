import Link from "next/link";

import { Button } from "@/components/ui/button";

import CancelCard from "@/components/checkout/CancelCard";
import CancelAnimation from "@/components/checkout/CancelAnimation";
import RetryPaymentButton from "@/components/checkout/RetryPaymentButton";

export const metadata = {
  title: "Payment Cancelled",
};

export default function CheckoutCancelPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-20">
      <div className="space-y-8">
        <CancelAnimation />

        <CancelCard />

        <div className="flex justify-center">
          {/* নিজের flow অনুযায়ী পরে href change করবে */}
          <RetryPaymentButton href="/dashboard/customer/rentals" />
        </div>

        <div className="flex justify-center">
          <Button variant="outline">
            <Link href="/">Back Home</Link>
          </Button>
        </div>

        <div className="rounded-xl border bg-muted/40 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            No payment has been processed. You can retry the payment anytime
            from your rentals.
          </p>
        </div>
      </div>
    </section>
  );
}
