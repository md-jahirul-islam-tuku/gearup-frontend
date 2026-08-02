import { TUsersResponse } from "@/types/user";
import EmptyPayments from "./EmptyPayments";
import PaymentRow from "./PaymentRow";

import { TPayment } from "@/types/payment";
import AppPagination from "@/components/shared/pagination/AppPagination";

type Props = {
  payments: TPayment[];
  users: TUsersResponse;
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
  totalPayments: number;
};

export default function PaymentTable({
  payments,
  users,
  meta,
  totalPayments,
}: Props) {
  if (!payments.length) {
    return <EmptyPayments />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted/50">
          <tr className="text-left">
            <th className="p-4">Gear</th>

            <th>Customer</th>

            <th>Amount</th>

            <th>Provider</th>

            <th>Status</th>

            <th>Paid At</th>

            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <PaymentRow key={payment.id} payment={payment} users={users} />
          ))}
        </tbody>
      </table>
      <AppPagination currentPage={meta?.page} totalPage={meta?.totalPage} />
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {totalPayments} of {meta?.total} payments.
      </div>
    </div>
  );
}
