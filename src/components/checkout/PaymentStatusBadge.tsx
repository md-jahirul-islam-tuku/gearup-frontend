import { Badge } from "@/components/ui/badge";

type Props = {
  status: "PAID" | "PENDING" | "FAILED";
};

export default function PaymentStatusBadge({ status }: Props) {
  const variants = {
    PAID: "bg-green-100 text-green-700",
    PENDING: "bg-yellow-100 text-yellow-700",
    FAILED: "bg-red-100 text-red-700",
  };

  return <Badge className={variants[status]}>{status}</Badge>;
}
