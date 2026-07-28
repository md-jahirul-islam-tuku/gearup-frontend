import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";

export default function NotFound() {
  return (
    <main className="flex min-h-svh items-center justify-center p-6">
      <Empty className="max-w-md border shadow-lg">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <FileQuestion />
          </EmptyMedia>
          <EmptyTitle className="text-xl text-red-600">404 &mdash; Page Not Found</EmptyTitle>
          <EmptyDescription>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It
            may have been moved or no longer exists.
          </EmptyDescription>
        </EmptyHeader>
        <EmptyContent>
          <Link
            href="/"
            className={buttonVariants({ variant: "default", size: "lg" })}
          >
            <ArrowLeft data-icon="inline-start" />
            Return Home
          </Link>
        </EmptyContent>
      </Empty>
    </main>
  );
}
