import Image from "next/image";

import PaymentStatusBadge from "./PaymentStatusBadge";

import { TPayment } from "@/types/payment";
import PaymentActions from "./PaymentActions";

type Props = {
  payment: TPayment;
};

export default function PaymentRow({ payment }: Props) {
  const gear = payment.rentalOrder.gearItem;

  return (
    <tr className="border-t">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <Image
            src={gear.images[0]}
            alt={gear.name}
            width={60}
            height={60}
            className="rounded-lg object-cover"
          />

          <div>
            <p className="font-medium">{gear.name}</p>

            <p className="text-sm text-muted-foreground">{gear.brand}</p>
          </div>
        </div>
      </td>

      <td>${payment.amount}</td>

      <td>
        <PaymentStatusBadge status={payment.status} />
      </td>

      <td>{new Date(payment.paidAt).toLocaleDateString()}</td>

      <td>{payment.provider}</td>

      <td>
        <PaymentActions payment={payment} />
      </td>
    </tr>
  );
}
