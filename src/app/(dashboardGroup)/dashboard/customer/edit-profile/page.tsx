import EditProfileForm from "@/components/dashboard/profile/EditProfileForm";
import { getMe } from "@/services/auth/me";

export default async function EditProfilePage() {
  const result = await getMe();

  if (!result.success || !result.data) {
    return <div className="py-20 text-center">Failed to load profile.</div>;
  }

  return (
    <div className="max-w-xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Edit Profile</h1>

        <p className="text-muted-foreground">
          Update your personal information.
        </p>
      </div>

      <EditProfileForm user={result.data} />
    </div>
  );
}
