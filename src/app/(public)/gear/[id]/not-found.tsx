import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold">Gear Not Found</h2>

      <p className="mt-4 mb-8 text-muted-foreground">
        The gear you are looking for does not exist.
      </p>

      <Link href="/gear">
        <Button>Browse Gear</Button>
      </Link>
    </section>
  );
}
