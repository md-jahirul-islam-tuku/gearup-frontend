import { notFound } from "next/navigation";

import GearDetails from "@/components/gear/gear-details/GearDetails";

import { getGearDetails } from "@/services/gear/getGearDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function GearDetailsPage({ params }: Props) {
  const { id } = await params;

  const result = await getGearDetails(id);

  if (!result.success) {
    notFound();
  }

  if (!result.success || !result.data) {
    return <div>Gear not found.</div>;
  }

  return (
    <section className="container mx-auto py-16 px-4 lg:px-0">
      <GearDetails gear={result.data} />
    </section>
  );
}
