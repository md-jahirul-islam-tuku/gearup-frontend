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
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-left">Gear</th>

            <th>Provider</th>

            <th>Category</th>

            <th>Price</th>

            <th>Stock</th>

            <th>Available</th>

            <th></th>
          </tr>
        </thead>

        <tbody>
          {gears.map((gear) => (
            <GearRow key={gear.id} gear={gear} />
          ))}
        </tbody>
      </table>

      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {gears.length} of {meta.total} gears
      </div>
    </div>
  );
}
