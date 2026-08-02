import Link from "next/link";

import { Button } from "@/components/ui/button";

import SuccessCard from "@/components/checkout/SuccessCard";
import SuccessAnimation from "@/components/checkout/SuccessAnimation";
import SuccessActions from "@/components/checkout/SuccessActions";

export const metadata = {
  title: "Payment Success",
};

export default function CheckoutSuccessPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 py-20">
      <div className="space-y-8">
        <SuccessAnimation />

        <SuccessCard />

        <SuccessActions />

        <div className="rounded-xl border bg-muted/40 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            Your payment has been confirmed successfully. You can now manage
            your rental from your dashboard.
          </p>

          <Button variant="link" className="mt-3">
            <Link href="/dashboard/customer/rentals">Go to Dashboard</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
