import AppPagination from "@/components/shared/pagination/AppPagination";

import EmptyPayment from "./EmptyPayment";
import PaymentRow from "./PaymentRow";

import { TMyPaymentResponse, TPayment } from "@/types/payment";

type Props = {
  payments: TPayment[];
  meta: TMyPaymentResponse["meta"];
};

export default function PaymentTable({ payments, meta }: Props) {
  if (!payments.length) {
    return <EmptyPayment />;
  }

  return (
    <div className="overflow-hidden rounded-xl border">
      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-225">
          <thead className="bg-muted">
            <tr>
              <th className="whitespace-nowrap p-4 text-left">Gear</th>

              <th className="whitespace-nowrap p-4 text-left">Amount</th>

              <th className="whitespace-nowrap p-4 text-left">Payment</th>

              <th className="whitespace-nowrap p-4 text-left">Paid At</th>

              <th className="whitespace-nowrap p-4 text-left">Provider</th>

              <th className="whitespace-nowrap p-4 text-left">Invoice</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <PaymentRow key={payment.id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      {/* Result Count */}
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {payments.length} of {meta.total} payments
      </div>
    </div>
  );
}
