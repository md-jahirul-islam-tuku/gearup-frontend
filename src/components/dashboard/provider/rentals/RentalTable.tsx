import AppPagination from "@/components/shared/pagination/AppPagination";
import { TRental } from "@/types/rental";

import RentalRow from "./RentalRow";

type Props = {
  rentals: TRental[];
  meta: {
    page: number;
    total: number;
    totalPage: number;
    limit: number;
  };
};

export default function ProviderRentalsTable({ rentals, meta }: Props) {
  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="whitespace-nowrap px-4 py-3 text-left">
                Customer
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-left">Gear</th>

              <th className="whitespace-nowrap px-4 py-3 text-center">Qty</th>

              <th className="whitespace-nowrap px-4 py-3 text-center">
                Amount
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-center">
                Status
              </th>

              <th className="whitespace-nowrap px-4 py-3 text-center">Pay</th>

              <th className="whitespace-nowrap px-4 py-3 text-center">
                Actions
              </th>
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
