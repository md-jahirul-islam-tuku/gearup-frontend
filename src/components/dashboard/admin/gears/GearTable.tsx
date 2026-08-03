import AppPagination from "@/components/shared/pagination/AppPagination";

import EmptyGear from "./EmptyGear";
import GearRow from "./GearRow";

import { TGear, TGearListResponse } from "@/types/gear";

type Props = {
  gears: TGear[];
  meta: TGearListResponse["data"]["meta"];
};

export default function GearTable({ gears, meta }: Props) {
  if (!gears?.length) {
    return <EmptyGear />;
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-225">
          <thead className="bg-muted">
            <tr>
              <th className="whitespace-nowrap p-4 text-left">Gear</th>

              <th className="whitespace-nowrap p-4 text-left">Provider</th>

              <th className="whitespace-nowrap p-4 text-left">Category</th>

              <th className="whitespace-nowrap p-4 text-left">Price</th>

              <th className="whitespace-nowrap p-4 text-left">Stock</th>

              <th className="whitespace-nowrap p-4 text-left">Available</th>

              <th className="whitespace-nowrap p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {gears.map((gear) => (
              <GearRow key={gear.id} gear={gear} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      {/* Result Count */}
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {gears.length} of {meta.total} gears
      </div>
    </div>
  );
}
