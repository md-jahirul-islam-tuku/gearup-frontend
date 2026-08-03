import PaymentDetailsCard from "@/components/dashboard/customer/payments/PaymentDetailsCard";
import { getPayment } from "@/services/payment/getPayment";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function PaymentDetailsPage({ params }: Props) {
  const { id } = await params;

  const result = await getPayment(id);

  return (
    <div className="space-y-6 p-4 lg:p-4">
      <h1 className="text-3xl font-bold">Payment Details</h1>

      <PaymentDetailsCard payment={result.data} />
    </div>
  );
}
