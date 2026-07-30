import { TRentalStatus } from "@/types/rental";

type Props = {
  status: TRentalStatus;
};

export default function RentalStatusBadge({ status }: Props) {
  const colors: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-700",

    APPROVED: "bg-blue-100 text-blue-700",

    ACTIVE: "bg-green-100 text-green-700",

    COMPLETED: "bg-gray-200 text-gray-700",

    CANCELLED: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-medium ${colors[status]}`}
    >
      {status}
    </span>
  );
}
