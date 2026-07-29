import SectionTitle from "@/components/shared/section-title/SectionTitle";

import GearCard from "./GearCard";

import { getFeaturedGear } from "@/services/gear/getFeaturedGear";

export default async function FeaturedGear() {
  const gears = await getFeaturedGear();
  console.log(gears);

  return (
    <section className="py-20 mx-auto max-w-6xl">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Gear"
          subtitle="Explore our most popular sports & outdoor equipment."
          className="mb-12"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gears.map((gear) => (
            <GearCard
              key={gear.id}
              gear={gear}
            />
          ))}
        </div>
      </div>
    </section>
  );
}