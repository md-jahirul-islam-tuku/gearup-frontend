type Props = {
  pricePerDay: number;
  quantity: number;
  totalDays: number;
};

export default function RentalSummary({
  pricePerDay,
  quantity,
  totalDays,
}: Props) {
  const total = pricePerDay * quantity * totalDays;

  return (
    <div className="rounded-xl border p-5">
      <h3 className="mb-5 text-xl font-semibold">Rental Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span>Price / Day</span>

          <span>${pricePerDay}</span>
        </div>

        <div className="flex justify-between">
          <span>Quantity</span>

          <span>{quantity}</span>
        </div>

        <div className="flex justify-between">
          <span>Total Days</span>

          <span>{totalDays}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>

          <span>${total}</span>
        </div>
      </div>
    </div>
  );
}
