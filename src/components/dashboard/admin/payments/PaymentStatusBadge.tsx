import { Badge } from "@/components/ui/badge";

type Props = {
  status: string;
};

export default function PaymentStatusBadge({ status }: Props) {
  switch (status) {
    case "PAID":
      return <Badge className="bg-green-500 hover:bg-green-500">Paid</Badge>;

    case "PENDING":
      return <Badge variant="secondary">Pending</Badge>;

    case "FAILED":
      return <Badge variant="destructive">Failed</Badge>;

    case "REFUNDED":
      return <Badge className="bg-blue-500 hover:bg-blue-500">Refunded</Badge>;

    default:
      return <Badge>{status}</Badge>;
  }
}
