import { Skeleton } from "@/components/ui/skeleton";

export default function RentalsSkeleton() {
  return (
    <div className="px-4 pt-4 lg:pt-0">
      <h1 className="text-3xl font-bold mb-6">My Rentals</h1>
      <div className="overflow-hidden rounded-xl border bg-background">
        <table className="w-full">
          <thead className="bg-muted">
            <tr className="text-start">
              <th className="px-4 py-5 w-2/6 text-start">Gear</th>
              <th className="px-4 py-5"> Price</th>
              <th className="px-4 py-5"> Start</th>
              <th className="px-4 py-5">End</th>
              <th className="px-4 py-5">Status</th>
              <th className="px-4 py-5">Pay</th>
              <th className="px-4 py-5">Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="border-t">
                {/* Gear */}
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-36" />
                  </div>
                </td>

                {/* Quantity */}
                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-8" />
                </td>

                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-8" />
                </td>

                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-8" />
                </td>

                {/* Amount */}
                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-20" />
                </td>

                {/* Status */}
                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-6 w-24 rounded-full" />
                </td>

                {/* Actions */}
                <td className="p-4">
                  <Skeleton className="mx-auto h-9 w-9 rounded-md" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
