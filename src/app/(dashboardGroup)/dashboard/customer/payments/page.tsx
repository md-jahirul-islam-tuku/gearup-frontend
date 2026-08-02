import PaymentTable from "@/components/dashboard/customer/payments/PaymentTable";

import { getMyPayments } from "@/services/payment/getMyPayments";

type Props = {
  searchParams: Promise<{
    page?: string;
  }>;
};

export default async function PaymentsPage({ searchParams }: Props) {
  const { page } = await searchParams;

  const result = await getMyPayments(Number(page) || 1);
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Payments</h1>
      </div>

      <PaymentTable payments={result.data} meta={result.meta} />
    </div>
  );
}
