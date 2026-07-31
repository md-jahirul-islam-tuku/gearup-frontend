import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import { getMe } from "@/services/auth/me";

export default async function CustomerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const result = await getMe();

  if (!result.success || !result.data) {
    return null;
  }

  return (
    <DashboardLayout
      title="Customer Dashboard"
      role="CUSTOMER"
      user={result.data}
    >
      {children}
    </DashboardLayout>
  );
}
