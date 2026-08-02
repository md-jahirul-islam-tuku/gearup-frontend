import { Skeleton } from "@/components/ui/skeleton";

export default function CategoryTableSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr>
            <th className="p-4 text-start">Name</th>
            <th className="text-start">Slug</th>
            <th className="text-start">Description</th>
            <th className="text-start">Created</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: 6 }).map((_, index) => (
            <tr key={index} className="border-t">
              <td className="p-5">
                <Skeleton className="h-5 w-32" />
              </td>

              <td>
                <Skeleton className="mx-auto h-5 w-28" />
              </td>

              <td>
                <Skeleton className="mx-auto h-5 w-48" />
              </td>

              <td>
                <Skeleton className="mx-auto h-5 w-24" />
              </td>

              <td>
                <Skeleton className="ml-auto mr-4 h-8 w-28" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div className="flex items-center justify-center gap-2 border-t p-4">
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-9 w-9" />
        <Skeleton className="h-9 w-9" />
      </div> */}

      <div className="border-t p-4">
        <Skeleton className="h-4 w-48" />
      </div>
    </div>
  );
}
