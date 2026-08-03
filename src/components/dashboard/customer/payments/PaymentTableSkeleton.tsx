import { Skeleton } from "@/components/ui/skeleton";

export default function RentalsSkeleton() {
  return (
    <div className="p-4 lg:p-4">
      <h1 className="text-3xl font-bold mb-6">My Payments</h1>
      <div className="overflow-hidden rounded-xl border bg-background">
        <table className="w-full">
          <thead className="bg-muted">
            <tr className="text-start">
              <th className="px-4 py-5 w-2/7 text-start">Gear</th>
              <th className="px-4 py-5"> Amount</th>
              <th className="px-4 py-5"> Status</th>
              <th className="px-4 py-5">Paid At</th>
              <th className="px-4 py-5">Provider</th>
              <th className="px-4 py-5">Invoice</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-4">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-36" />
                  </div>
                </td>

                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-8" />
                </td>

                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-8" />
                </td>

                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-8" />
                </td>

                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-5 w-20" />
                </td>

                <td className="px-4 py-4 text-center">
                  <Skeleton className="mx-auto h-6 w-24 rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
