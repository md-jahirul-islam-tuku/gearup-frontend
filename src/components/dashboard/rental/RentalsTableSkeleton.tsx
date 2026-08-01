import { Skeleton } from "@/components/ui/skeleton";

export default function RentalsTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="px-4 py-3 text-left">Customer</th>
            <th className="px-4 py-3 text-left">Gear</th>
            <th className="px-4 py-3 text-center">Qty</th>
            <th className="px-4 py-3 text-center">Amount</th>
            <th className="px-4 py-3 text-center">Status</th>
            <th className="px-4 py-3 text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index} className="border-t">
              {/* Customer */}
              <td className="px-4 py-4">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-36" />
                </div>
              </td>

              {/* Gear */}
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-10 w-10 rounded-md" />

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-28" />
                    <Skeleton className="h-3 w-20" />
                  </div>
                </div>
              </td>

              {/* Quantity */}
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
  );
}
