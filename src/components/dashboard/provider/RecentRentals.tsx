import { TRental } from "@/types/rental";

type Props = {
  rentals: TRental[];
};

export default function RecentRentals({ rentals }: Props) {
  if (!rentals.length) {
    return (
      <div className="rounded-lg border p-8 text-center">
        No recent rentals.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {rentals.map((rental) => (
        <div key={rental.id} className="rounded-lg border p-4">
          <div className="font-medium">{rental.gearItem.name}</div>

          <div className="text-muted-foreground text-sm">
            {rental.customer.name}
          </div>

          <div className="font-semibold">${rental.totalAmount}</div>
        </div>
      ))}
    </div>
  );
}
