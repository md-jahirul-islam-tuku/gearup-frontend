/* eslint-disable @typescript-eslint/no-explicit-any */

import GearCard from "../home/featured-gear/GearCard";
import AppPagination from "../shared/pagination/AppPagination";

type Props = {
  gear: any[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
};

export default function GearGrid({ gear, meta }: Props) {
  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gear.map((item) => (
          <GearCard key={item.id} gear={item} />
        ))}
      </div>

      <div className="mt-10">
        <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />
      </div>
    </>
  );
}
