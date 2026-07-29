import FeaturedCategories from "@/components/home/featured-categories/FeaturedCategories";
import FeaturedGear from "@/components/home/featured-gear";
import { Hero } from "@/components/home/hero/Hero";

const RootPage = () => {
  return (
    <div>
      <Hero />
      <FeaturedCategories />
      <FeaturedGear />
    </div>
  );
};

export default RootPage;
