import Image from "next/image";
import Link from "next/link";

import { TRental } from "@/types/rental";
import RentalStatusBadge from "./RentalStatusBadge";
import { SquareArrowOutUpRight } from "lucide-react";

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

      <td>${rental.totalAmount}</td>

      <td>{rental.startDate}</td>

      <td>{rental.endDate}</td>

      <td>
        <RentalStatusBadge status={rental.status} />
      </td>

      <td>
        <Link
          href={`/dashboard/provider/rentals/${rental.id}`}
          className="inline-flex mr-3"
        >
          <SquareArrowOutUpRight className="size-5 text-primary transition-transform duration-200 hover:scale-125" />
        </Link>
      </td>
    </tr>
  );
}
