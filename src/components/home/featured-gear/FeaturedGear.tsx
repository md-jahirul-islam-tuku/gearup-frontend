import SectionTitle from "@/components/shared/section-title/SectionTitle";

import GearCard from "./GearCard";

import { getFeaturedGear } from "@/services/gear/getFeaturedGear";
import { TGear } from "@/types/gear";
import { Button } from "@base-ui/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function FeaturedGear() {
  const gears = await getFeaturedGear();
  return (
    <section className="py-20 mx-auto max-w-6xl">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Featured Gear"
          subtitle="Explore our most popular sports & outdoor equipment."
          className="mb-12"
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gears.data.data.map((gear: TGear) => (
            <GearCard key={gear.id} gear={gear} />
          ))}
        </div>
        <div className="text-center">
          <Button className="my-10 group rounded-full px-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border">
            <Link href="/gears">
              <div className="flex items-center py-5">
                <span className="text-lg font-bold">View All Gears</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
