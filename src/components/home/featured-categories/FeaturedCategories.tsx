import SectionTitle from "@/components/shared/section-title/SectionTitle";
import { getCategoryIcon } from "@/lib/category-icons";
import { getCategories } from "@/services/category/getCategories";
import CategoryCard from "./CategoryCard";

const FeaturedCategories = async () => {
  const result = await getCategories();
  if (!result.success || !result.data) {
    return <div>No categories found.</div>;
  }
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <SectionTitle
          title="Browse by Category"
          subtitle="Discover quality sports and outdoor equipment from trusted providers."
          className="mb-12"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {result.data.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              icon={getCategoryIcon(category.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
