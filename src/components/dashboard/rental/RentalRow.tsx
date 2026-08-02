import Image from "next/image";
import Link from "next/link";

import { SquareArrowOutUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";

import { TRental } from "@/types/rental";

import RentalStatusBadge from "./RentalStatusBadge";
import PayNowButton from "@/components/checkout/PayNowButton";

type Props = {
  rental: TRental;
};

export default function RentalRow({ rental }: Props) {
  const isPaid = rental.payment?.status === "PAID";
  const canPay = rental.status === "PLACED" && !isPaid;

  return (
    <tr className="border-b">
      <td className="py-4">
        <div className="ml-3 flex items-center gap-4">
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
              {rental.quantity} item(s)
            </p>
          </div>
        </div>
      </td>

      <td>${rental.totalAmount}</td>

      <td>{new Date(rental.startDate).toLocaleDateString()}</td>

      <td>{new Date(rental.endDate).toLocaleDateString()}</td>

      <td>
        <RentalStatusBadge status={rental.status} />
      </td>
      <td>
        {isPaid ? (
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 dark:hover:bg-green-900/30"
          >
            PAID
          </Badge>
        ) : (
          canPay && <PayNowButton rentalId={rental.id} />
        )}
      </td>

      <td>
        <div className="flex justify-center">
          <Link href={`/dashboard/customer/rentals/${rental.id}`}>
            <SquareArrowOutUpRight className="size-5 text-primary transition-transform duration-200 hover:scale-110" />
          </Link>
        </div>
      </td>
    </tr>
  );
}
