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
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-left">Gear</th>

            <th className="p-4 text-left">Amount</th>

            <th className="p-4 text-left">Payment</th>

            <th className="p-4 text-left">Paid At</th>

            <th className="p-4 text-left">Provider</th>

            <th className="p-4 text-left">Invoice</th>
          </tr>
        </thead>

        <tbody>
          {payments.map((payment) => (
            <PaymentRow key={payment.id} payment={payment} />
          ))}
        </tbody>
      </table>

      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {payments.length} of {meta.total} payments
      </div>
    </div>
  );
}
