import AppPagination from "@/components/shared/pagination/AppPagination";

import EmptyRental from "./EmptyRental";
import RentalRow from "./RentalRow";

import { TMyRentalResponse, TRental } from "@/types/rental";

type Props = {
  rentals: TRental[];
  meta: TMyRentalResponse["meta"];
};

export default function RentalTable({ rentals, meta }: Props) {
  if (!rentals?.length) {
    return <EmptyRental />;
  }

  return (
    <div className="overflow-hidden rounded-xl border">
      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-200">
          <thead className="bg-muted">
            <tr className="text-left">
              <th className="whitespace-nowrap p-4">Gear</th>

              <th className="whitespace-nowrap p-4">Price</th>

              <th className="whitespace-nowrap p-4">Start</th>

              <th className="whitespace-nowrap p-4">End</th>

              <th className="whitespace-nowrap p-4">Status</th>

              <th className="whitespace-nowrap p-4">Actions</th>
            </tr>
          </thead>

          <tbody>
            {rentals.map((rental) => (
              <RentalRow key={rental.id} rental={rental} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      {/* Result Count */}
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {rentals.length} of {meta.total} rentals
      </div>
    </div>
  );
}
