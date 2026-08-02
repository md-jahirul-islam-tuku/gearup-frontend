import PaymentTable from "@/components/dashboard/admin/payments/PaymentTable";
import getPayments from "@/services/admin/getPayments";
import { getUsers } from "@/services/admin/getUsers";

type Props = {
  searchParams: Promise<{
    page?: string;
    limit?: string;
  }>;
};

export default async function AdminPaymentsPage({ searchParams }: Props) {
  const params = await searchParams;

  const result = await getPayments(params);
  const users = await getUsers();
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Payment Management</h1>

        <p className="text-muted-foreground">View all payment transactions.</p>
      </div>

      <PaymentTable
        payments={result.data?.data}
        users={users}
        meta={result.data.meta}
        totalPayments={result.data.data.length}
      />

      {/* Pagination */}
    </div>
  );
}
