import ChangePasswordForm from "@/components/dashboard/profile/ChangePasswordForm";

export default function ChangePasswordPage() {
  return (
    <div className="max-w-3xl space-y-8 p-4 lg:p-4">
      <div>
        <h1 className="text-3xl font-bold">Change Password</h1>

        <p className="text-muted-foreground">Update your account password.</p>
      </div>

      <ChangePasswordForm />
    </div>
  );
}
