type Props = {
  amount: string;
};

export default function PaymentSummary({ amount }: Props) {
  return (
    <div className="rounded-xl border p-6">
      <h2 className="text-lg font-semibold mb-4">Payment Summary</h2>

      <div className="flex justify-between">
        <span>Total Payable</span>

        <span className="font-bold text-xl">${amount}</span>
      </div>
    </div>
  );
}
