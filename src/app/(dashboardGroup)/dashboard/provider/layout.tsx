import DashboardLayout from "@/components/dashboard/layout/DashboardLayout";
import { getMe } from "@/services/auth/me";

export default async function ProviderLayout({
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
      title="Provider Dashboard"
      role="PROVIDER"
      user={result.data}
    >
      {children}
    </DashboardLayout>
  );
}
