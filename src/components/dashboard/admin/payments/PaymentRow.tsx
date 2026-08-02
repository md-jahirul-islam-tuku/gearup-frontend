import Image from "next/image";

import PaymentActions from "./PaymentActions";
import PaymentStatusBadge from "./PaymentStatusBadge";

import { TPayment } from "@/types/payment";
import { TUsersResponse } from "@/types/user";

type Props = {
  payment: TPayment;
  users: TUsersResponse;
};

export default function PaymentRow({ payment, users }: Props) {
  const gear = payment.rentalOrder.gearItem;

  return (
    <tr className="border-b">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <Image
            src={gear.images[0]}
            alt={gear.name}
            width={60}
            height={60}
            className="rounded object-cover"
          />

          <div>
            <p className="font-medium">{gear.name}</p>

            <p className="text-sm text-muted-foreground">
              {gear.category.name}
            </p>
          </div>
        </div>
      </td>

      <td>
        <div>
          <p>{payment.rentalOrder.customer.name}</p>

          <p className="text-xs text-muted-foreground">
            {payment.rentalOrder.customer.email}
          </p>
        </div>
      </td>

      <td>${payment.amount}</td>

      <td>{payment.provider}</td>

      <td>
        <PaymentStatusBadge status={payment.status} />
      </td>

      <td>
        {payment.paidAt ? new Date(payment.paidAt).toLocaleDateString() : "-"}
      </td>

      <td>
        <PaymentActions payment={payment} users={users} />
      </td>
    </tr>
  );
}
