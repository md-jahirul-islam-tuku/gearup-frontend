import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function SuccessActions() {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-4">
      <Button>
        <Link href="/dashboard/customer/rentals">My Rentals</Link>
      </Button>

      <Button variant="outline">
        <Link href="/dashboard/customer/payments">My Payments</Link>
      </Button>

      <Button variant="secondary">
        <Link href="/">Back Home</Link>
      </Button>
    </div>
  );
}
