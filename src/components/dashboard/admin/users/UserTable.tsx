import AppPagination from "@/components/shared/pagination/AppPagination";

import { TUsersResponse, TUser } from "@/types/user";

import UserRow from "./UserRow";

type Props = {
  users: TUser[];
  meta: TUsersResponse["meta"];
};

export default function UserTable({ users, meta }: Props) {
  if (!users.length) {
    return (
      <div className="rounded-xl border py-20 text-center text-muted-foreground">
        No users found.
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-background">
      {/* Responsive Table */}
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-200">
          <thead className="bg-muted">
            <tr>
              <th className="whitespace-nowrap p-4 text-left">User</th>

              <th className="whitespace-nowrap p-4 text-left">Email</th>

              <th className="whitespace-nowrap p-4 text-left">Role</th>

              <th className="whitespace-nowrap p-4 text-left">Status</th>

              <th className="whitespace-nowrap p-4 text-left">Created</th>

              <th className="whitespace-nowrap p-4 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <UserRow key={user.id} user={user} />
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      {/* Result Count */}
      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {users.length} of {meta.total} users
      </div>
    </div>
  );
}
