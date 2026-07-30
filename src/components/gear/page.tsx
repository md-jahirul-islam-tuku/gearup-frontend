import SectionTitle from "@/components/shared/section-title/SectionTitle";

import { GearFilter, GearGrid, GearPagination } from "@/components/gear";

import { getAllGear } from "@/services/gear/getAllGear";

export default async function GearPage() {
  const result = await getAllGear();

  if (!result.success || !result.data) {
    return <div>No gears found.</div>;
  }

  const gears = result.data.data;
  const meta = result.data.meta;

  return (
    <section className="container mx-auto px-4 py-16">
      <SectionTitle
        title="Browse Gear"
        subtitle="Discover premium sports & outdoor equipment."
        className="mb-12"
      />

      <GearFilter />

      <GearGrid gears={gears} />

      <GearPagination currentPage={meta.page} totalPage={meta.totalPage} />
    </section>
  );
}
