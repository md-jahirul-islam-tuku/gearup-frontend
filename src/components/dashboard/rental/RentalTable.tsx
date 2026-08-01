import { TMyRentalResponse, TRental } from "@/types/rental";
import EmptyRental from "./EmptyRental";
import RentalRow from "./RentalRow";

type Props = {
  rentals: TRental[];
 meta: TMyRentalResponse["meta"];
};

export default function RentalTable({ rentals, meta }: Props) {
  if (!rentals?.length) {
    return <EmptyRental />;
  }

  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-left">Gear</th>
            <th>Total</th>
            <th>Start</th>
            <th>End</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {rentals.map((rental) => (
            <RentalRow key={rental.id} rental={rental} />
          ))}
        </tbody>
      </table>
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {rentals.length} of {meta.total} rentals
      </div>
    </div>
  );
}
