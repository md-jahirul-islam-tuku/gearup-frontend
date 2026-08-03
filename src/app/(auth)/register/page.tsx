import Link from "next/link";
import RegisterForm from "./_components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="flex min-h-[calc(100vh-68px)] items-center justify-center px-4 lg:px-4">
      <div className="w-full max-w-md rounded-xl border bg-card p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Create an Account
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Join Prisma Press and start sharing your stories with the world.
          </p>
        </div>

        <RegisterForm />

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-primary hover:underline"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
