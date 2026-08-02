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
    <div className="overflow-hidden rounded-xl border">
      <table className="w-full">
        <thead className="bg-muted">
          <tr className="text-start">
            <th className="p-4 text-start">User</th>
            <th className="text-start">Email</th>
            <th className="text-start">Role</th>
            <th className="text-start">Status</th>
            <th className="text-start">Created</th>
            <th className="text-start">Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>

      <AppPagination currentPage={meta.page} totalPage={meta.totalPage} />

      <div className="border-t p-4 text-sm text-muted-foreground">
        Showing {users.length} of {meta.total} users
      </div>
    </div>
  );
}
