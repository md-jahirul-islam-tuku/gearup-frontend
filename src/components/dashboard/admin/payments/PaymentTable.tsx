import AppPagination from "@/components/shared/pagination/AppPagination";

import { TPayment } from "@/types/payment";
import { TUsersResponse } from "@/types/user";

import EmptyPayments from "./EmptyPayments";
import PaymentRow from "./PaymentRow";

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
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-237.5">
          <thead className="bg-muted/50">
            <tr className="text-left">
              <th className="whitespace-nowrap p-4">Gear</th>

              <th className="whitespace-nowrap p-4">Customer</th>

              <th className="whitespace-nowrap p-4">Amount</th>

              <th className="whitespace-nowrap p-4">Provider</th>

              <th className="whitespace-nowrap p-4">Status</th>

              <th className="whitespace-nowrap p-4">Paid At</th>

              <th className="whitespace-nowrap p-4">Action</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <PaymentRow key={payment.id} payment={payment} users={users} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <AppPagination currentPage={meta?.page} totalPage={meta?.totalPage} />

      {/* Result Count */}
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {totalPayments} of {meta?.total} payments.
      </div>
    </div>
  );
}
