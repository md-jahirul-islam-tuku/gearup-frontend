import Container from "@/components/shared/container/Container";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
