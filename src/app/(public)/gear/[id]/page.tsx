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

  return (
    <section className="container mx-auto py-16">
      <GearDetails gear={result.data} />
    </section>
  );
}
