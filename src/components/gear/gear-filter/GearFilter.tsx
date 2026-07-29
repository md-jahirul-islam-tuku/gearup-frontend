import SearchBox from "./SearchBox";
import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import AvailabilityFilter from "./AvailabilityFilter";
import PriceFilter from "./PriceFilter";

export default function GearFilter() {
  return (
    <div className="mb-10 rounded-xl border bg-card p-6">
      <div className="grid gap-5 lg:grid-cols-5">
        <SearchBox />
        <CategoryFilter />
        <BrandFilter />
        <AvailabilityFilter />
        <PriceFilter />
      </div>
    </div>
  );
}
