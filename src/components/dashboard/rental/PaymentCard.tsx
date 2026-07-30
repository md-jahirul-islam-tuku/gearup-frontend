import { Card } from "@/components/ui/card";

type Props = {
  payment: {
    amount: string;
    status: string;
    provider: string;
    transactionId: string;
    paidAt: string | null;
  };
};

export default function PaymentCard({ payment }: Props) {
  return (
    <Card className="space-y-4 p-6">
      <h3 className="text-xl font-semibold">Payment Details</h3>

      <div className="space-y-3">
        <div className="flex justify-between">
          <span>Status</span>

          <span className="font-medium text-green-600">{payment?.status}</span>
        </div>

        <div className="flex justify-between">
          <span>Provider</span>

          <span>{payment?.provider}</span>
        </div>

        <div className="flex justify-between">
          <span>Amount</span>

          <span>${payment?.amount}</span>
        </div>

        <div className="flex justify-between">
          <span>Transaction</span>

          <span className="max-w-45 truncate">{payment?.transactionId}</span>
        </div>

        {payment?.paidAt && (
          <div className="flex justify-between">
            <span>Paid At</span>

            <span>{new Date(payment?.paidAt).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </Card>
  );
}
