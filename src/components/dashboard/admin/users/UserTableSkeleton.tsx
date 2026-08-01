import { Skeleton } from "@/components/ui/skeleton";

export default function UserTableSkeleton() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Users Management</h1>
      <div className="overflow-hidden rounded-xl border">
        <table className="w-full">
          <thead className="bg-muted">
            <tr>
              <th className="p-4 text-left">User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 8 }).map((_, index) => (
              <tr key={index} className="border-b">
                {/* User */}
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />

                    <div className="space-y-2">
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-3 w-20" />
                    </div>
                  </div>
                </td>

                {/* Email */}
                <td>
                  <Skeleton className="h-4 w-52" />
                </td>

                {/* Role */}
                <td>
                  <Skeleton className="h-8 w-24 rounded-full" />
                </td>

                {/* Status */}
                <td>
                  <Skeleton className="h-8 w-24 rounded-full" />
                </td>

                {/* Created */}
                <td>
                  <Skeleton className="h-4 w-28" />
                </td>

                {/* Action */}
                <td>
                  <Skeleton className="h-9 w-24 rounded-md" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <Skeleton className="h-4 w-40" />

          <div className="flex gap-2">
            <Skeleton className="h-9 w-9 rounded-md" />
            <Skeleton className="h-9 w-9 rounded-md" />
            <Skeleton className="h-9 w-9 rounded-md" />
            <Skeleton className="h-9 w-9 rounded-md" />
          </div>
        </div>
      </div>
    </div>
  );
}
