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
    <div className="w-full overflow-hidden rounded-xl border">
      <div className="overflow-x-auto">
        <table className="min-w-225 w-full">
          <thead className="bg-muted/50">
            <tr className="text-left text-sm">
              <th className="p-4">Gear</th>

              <th className="p-4">Customer</th>

              <th className="p-4">Amount</th>

              <th className="p-4">Provider</th>

              <th className="p-4">Status</th>

              <th className="p-4">Paid At</th>

              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <PaymentRow key={payment.id} payment={payment} users={users} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex flex-col gap-3 border-t p-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

        <p>
          Showing {totalPayments} of {meta.total} payments.
        </p>
      </div>
    </div>
  );
}
