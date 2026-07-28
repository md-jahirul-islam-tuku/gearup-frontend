import Container from "@/components/shared/container/Container";
import SectionTitle from "@/components/shared/section-title/SectionTitle";

import CategoryCard from "./CategoryCard";
import { categories } from "./categories";

export default function FeaturedCategories() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Browse by Category"
          subtitle="Find the perfect equipment for your next adventure."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
