import { Skeleton } from "@/components/ui/skeleton";

export default function GearTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-left">Gear</th>
            <th>Provider</th>
            <th>Category</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Available</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 8 }).map((_, index) => (
            <tr key={index} className="border-t">
              <td className="p-4">
                <div className="flex items-center gap-3">
                  <Skeleton className="h-16 w-16 rounded-lg" />

                  <div className="space-y-2">
                    <Skeleton className="h-4 w-40" />
                    <Skeleton className="h-3 w-24" />
                  </div>
                </div>
              </td>

              <td className="text-center">
                <div className="space-y-2">
                  <Skeleton className="mx-auto h-4 w-28" />
                  <Skeleton className="mx-auto h-3 w-36" />
                </div>
              </td>

              <td className="text-center">
                <Skeleton className="mx-auto h-4 w-20" />
              </td>

              <td className="text-center">
                <Skeleton className="mx-auto h-4 w-14" />
              </td>

              <td className="text-center">
                <Skeleton className="mx-auto h-4 w-10" />
              </td>

              <td className="text-center">
                <Skeleton className="mx-auto h-7 w-24 rounded-full" />
              </td>

              <td className="text-center">
                <Skeleton className="mx-auto h-9 w-9 rounded-md" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
