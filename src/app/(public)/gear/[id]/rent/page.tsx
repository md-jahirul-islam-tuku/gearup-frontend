import { notFound } from "next/navigation";

import { RentalForm } from "@/components/rental";

import { getGearDetails } from "@/services/gear/getGearDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RentPage({ params }: Props) {
  const { id } = await params;

  const result = await getGearDetails(id);

  if (!result.success) {
    notFound();
  }

  return (
    <section className="container mx-auto max-w-3xl py-16">
      <h1 className="mb-8 text-3xl font-bold">Rent Gear</h1>

      <RentalForm gear={result.data} />
    </section>
  );
}
