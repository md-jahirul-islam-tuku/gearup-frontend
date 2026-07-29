import SectionTitle from "@/components/shared/section-title/SectionTitle";

import { GearFilter, GearGrid, GearPagination } from "@/components/gear";

import { getAllGear } from "@/services/gear/getAllGear";

export default async function GearPage() {
  const result = await getAllGear();

  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle
        title="Browse Gear"
        subtitle="Discover premium sports & outdoor equipment."
        className="mb-12"
      />

      <GearFilter />

      <GearGrid gears={result.data} />

      <GearPagination
        currentPage={result.meta.page}
        totalPage={result.meta.totalPage}
      />
    </section>
  );
}
