import Image from "next/image";
import Link from "next/link";

import { TRental } from "@/types/rental";

import RentalStatusBadge from "./RentalStatusBadge";

type Props = {
  rental: TRental;
};

export default function RentalRow({ rental }: Props) {
  return (
    <tr className="border-b">
      <td className="py-4">
        <div className="flex items-center gap-4">
          <Image
            src={rental.gearItem.images[0]}
            alt={rental.gearItem.name}
            width={60}
            height={60}
            className="rounded-lg object-cover ml-3"
          />

          <div>
            <p className="font-medium">{rental.gearItem.name}</p>

            <p className="text-sm text-muted-foreground">
              {rental.quantity} item(s)
            </p>
          </div>
        </div>
      </td>

      <td>${rental.totalPrice}</td>

      <td>{rental.startDate}</td>

      <td>{rental.endDate}</td>

      <td>
        <RentalStatusBadge status={rental.status} />
      </td>

      <td>
        <Link
          href={`/dashboard/customer/rentals/${rental.id}`}
          className="text-primary hover:underline"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
