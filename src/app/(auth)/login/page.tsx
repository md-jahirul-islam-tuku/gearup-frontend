import React from "react";
import Link from "next/link";
import LoginForm from "./_components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div className="flex min-h-[calc(100vh-68px)] items-center justify-center">
        <div className="w-full max-w-md space-y-6 bg-card rounded-lg border p-8 shadow-lg">
          {/* FORM GENERIC TEXTS */}
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Welcome Back!</h1>
            <p className="text-gray-500">
              Enter your credentials to access your account
            </p>
          </div>
          {/* FORM */}
          <LoginForm />
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Have no account yet?{" "}
            <Link
              href="/register"
              className="font-medium text-primary hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
