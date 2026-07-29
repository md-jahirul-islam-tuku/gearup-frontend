import { HeroContent } from "./HeroContent";
import HeroImage from "./HeroImage";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-background py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center min-h-150">
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
