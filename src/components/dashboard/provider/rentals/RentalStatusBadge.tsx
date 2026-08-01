import { Badge } from "@/components/ui/badge";

type Props = {
  status: string;
};

export default function RentalStatusBadge({ status }: Props) {
  const variants = {
    PLACED: "secondary",
    CONFIRMED: "default",
    PICKED_UP: "outline",
    RETURNED: "default",
    CANCELLED: "destructive",
  } as const;

  return (
    <Badge variant={variants[status as keyof typeof variants] ?? "secondary"}>
      {status}
    </Badge>
  );
}
