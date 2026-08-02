import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import { TRental } from "@/types/rental";

import RentalStatusBadge from "./RentalStatusBadge";
import RentalActions from "./RentalActions";

type Props = {
  rental: TRental;
};

export default function RentalRow({ rental }: Props) {
  const isPaid = rental.payment?.status === "PAID";

  return (
    <tr className="border-t">
      <td className="px-4 py-4">
        <div>
          <p className="font-medium">{rental.customer.name}</p>

          <p className="text-sm text-muted-foreground">
            {rental.customer.email}
          </p>
        </div>
      </td>

      <td className="px-4 py-4">
        <div className="flex items-center gap-3">
          <Image
            src={rental.gearItem.images[0]}
            alt={rental.gearItem.name}
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />

          <div>
            <p className="font-medium">{rental.gearItem.name}</p>

            <p className="text-sm text-muted-foreground">
              {rental.gearItem.category.name}
            </p>
          </div>
        </div>
      </td>

      <td className="text-center">{rental.quantity}</td>

      <td className="text-center">${rental.totalAmount}</td>

      <td className="text-center">
        <RentalStatusBadge status={rental.status} />
      </td>
      <td className="text-center">
        <Badge
          variant="secondary"
          className={
            isPaid
              ? "bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30"
              : "bg-red-100 text-red-700 hover:bg-red-100 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/30"
          }
        >
          {isPaid ? "PAID" : "UNPAID"}
        </Badge>
      </td>

      <td className="text-center">
        <RentalActions rental={rental} />
      </td>
    </tr>
  );
}
