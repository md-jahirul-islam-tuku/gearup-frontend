// import UserFilters from "@/components/dashboard/admin/users/UserFilters";
import UserTable from "@/components/dashboard/admin/users/UserTable";

import { getUsers } from "@/services/admin/getUsers";

type Props = {
  searchParams: Promise<{
    page?: string;
    searchTerm?: string;
    role?: string;
    status?: string;
  }>;
};

export default async function UsersPage({ searchParams }: Props) {
  const query = await searchParams;

  const result = await getUsers(query);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Users Management</h1>

      {/* <UserFilters /> */}

      <UserTable users={result.data} meta={result.meta} />
    </div>
  );
}
