import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroContent() {
  return (
    <div className="flex flex-col justify-center gap-6">
      <div className="flex flex-col gap-3">
        <span className="inline-block w-fit rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs font-medium text-secondary-foreground">
          Introducing Our Platform
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
          Gear Up for Your Next Big Adventure
        </h1>
        <p className="text-lg text-muted-foreground text-pretty max-w-md">
          Rent premium sports and outdoor equipment at affordable rates. Choose
          your gear, hit the trails, and make memories without the heavy cost.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button size="lg" className="gap-2">
          Get Started
          <ArrowRight className="size-4" />
        </Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>

      <div className="flex flex-col gap-2 pt-4">
        <p className="text-sm font-medium text-muted-foreground">
          Trusted by leading companies
        </p>
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-sm font-semibold text-secondary-foreground">
            A
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-sm font-semibold text-secondary-foreground">
            B
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-sm font-semibold text-secondary-foreground">
            C
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded bg-secondary text-sm font-semibold text-secondary-foreground">
            D
          </div>
        </div>
      </div>
    </div>
  );
}
