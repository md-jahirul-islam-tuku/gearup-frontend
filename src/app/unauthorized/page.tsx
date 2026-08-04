import Link from "next/link";

import { ShieldX, ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] items-center justify-center px-4">
      <div className="mx-auto max-w-lg text-center">
        <div className="mb-6 flex justify-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-destructive/10">
            <ShieldX className="h-12 w-12 text-destructive" />
          </div>
        </div>

        <h1 className="text-4xl font-bold tracking-tight">Access Denied</h1>

        <p className="mt-4 text-muted-foreground">
          You don&apos;t have permission to access this page.
          <br />
          Please sign in with the appropriate account or return to the homepage.
        </p>

        <div className="mt-8">
          <Button>
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
