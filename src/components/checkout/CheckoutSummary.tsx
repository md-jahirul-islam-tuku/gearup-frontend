type Props = {
  gearName: string;
  quantity: number;
  startDate: string;
  endDate: string;
  totalAmount: string;
};

export default function CheckoutSummary({
  gearName,
  quantity,
  startDate,
  endDate,
  totalAmount,
}: Props) {
  return (
    <div className="rounded-xl border p-6 space-y-4">
      <h2 className="text-xl font-semibold">Rental Summary</h2>

      <div className="space-y-2 text-sm">
        <Row label="Gear" value={gearName} />
        <Row label="Quantity" value={String(quantity)} />
        <Row label="Start Date" value={startDate} />
        <Row label="End Date" value={endDate} />
      </div>

      <div className="border-t pt-4 flex justify-between font-semibold">
        <span>Total</span>
        <span>${totalAmount}</span>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span>{value}</span>
    </div>
  );
}
