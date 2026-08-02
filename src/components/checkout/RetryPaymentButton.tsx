import Link from "next/link";

import { Button } from "@/components/ui/button";

type Props = {
  href: string;
};

export default function RetryPaymentButton({ href }: Props) {
  return (
    <Button>
      <Link href={href}>Retry Payment</Link>
    </Button>
  );
}
