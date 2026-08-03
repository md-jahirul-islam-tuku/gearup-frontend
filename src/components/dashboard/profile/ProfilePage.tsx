import ProfileCard from "@/components/dashboard/profile/ProfileCard";
import { getMe } from "@/services/auth/me";

export default async function CustomerProfilePage() {
  const result = await getMe();

  if (!result.success || !result.data) {
    return <div className="py-20 text-center">Failed to load profile.</div>;
  }

  return (
    <div className="space-y-8 p-4 lg:p-0">
      <div>
        <h1 className="text-3xl font-bold">My Profile</h1>

        <p className="text-muted-foreground">
          Manage your personal information.
        </p>
      </div>

      <ProfileCard user={result.data} />
    </div>
  );
}
