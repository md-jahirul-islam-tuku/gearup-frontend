"use client";

// import { Button } from "@/components/ui/button";

type Props = {
  error: Error & {
    digest?: string;
  };

  reset: () => void;
};

export default function Error({ error, reset }: Props) {
  console.error(error);

  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="mb-4 text-3xl font-bold">Something went wrong</h2>

      <p className="mb-8 max-w-md text-muted-foreground">
        We couldn&apos;t load this gear. Please try again.
      </p>

      <button onClick={reset}>Try Again</button>
    </section>
  );
}
