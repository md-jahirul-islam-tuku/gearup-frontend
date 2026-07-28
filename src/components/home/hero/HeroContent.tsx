import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  return (
    <div className="flex gap-4">
      <Link href="/gear">
        <Button size="lg">
          Browse Gear
          <ArrowRight />
        </Button>
      </Link>

      <Link href="/auth/register">
        <Button variant="outline" size="lg">
          Become a Provider
        </Button>
      </Link>
    </div>
  );
}
