import ProviderOverview from "@/components/dashboard/provider/ProviderOverview";

import { getProviderOverview } from "@/services/provider/getProviderOverview";

export default async function ProviderDashboardPage() {
  const result = await getProviderOverview();

  if (!result.success || !result.data) {
    return <div className="py-20 text-center">Failed to load dashboard.</div>;
  }

  return <ProviderOverview overview={result.data} />;
}
