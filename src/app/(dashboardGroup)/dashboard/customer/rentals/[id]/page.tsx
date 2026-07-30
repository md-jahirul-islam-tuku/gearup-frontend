import { notFound } from "next/navigation";

import RentalDetails from "@/components/dashboard/rental/RentalDetails";

import { getRentalDetails } from "@/services/rental/getRentalDetails";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function RentalDetailsPage({ params }: Props) {
  const { id } = await params;

  const result = await getRentalDetails(id);

  if (!result.success) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Rental Details</h1>

      <RentalDetails rental={result.data} />
    </div>
  );
}
