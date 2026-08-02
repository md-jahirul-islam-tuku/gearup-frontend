import { Badge } from "@/components/ui/badge";

import { TPaymentStatus } from "@/types/payment";

type Props = {
  status: TPaymentStatus;
};

const colors: Record<TPaymentStatus, string> = {
  PAID: "bg-green-100 text-green-700",

  PENDING: "bg-yellow-100 text-yellow-700",

  FAILED: "bg-red-100 text-red-700",
};

export default function PaymentStatusBadge({ status }: Props) {
  return <Badge className={colors[status]}>{status}</Badge>;
}
