import RentalsTableSkeleton from "@/components/dashboard/admin/rentals/RentalTableSkeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Rentals</h1>
      </div>
      <RentalsTableSkeleton />
    </div>
  );
}
