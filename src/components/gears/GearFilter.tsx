/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { TCategoriesResponse } from "@/types/category";
import AvailabilityFilter from "./AvailabilityFilter";
import BrandFilter from "./BrandFilter";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ResetFilters from "./ResetFilters";
import SearchFilter from "./SearchFilter";
import SortFilter from "./SortFilter";

type Props = {
  result: any;
  categories: TCategoriesResponse;
};

export default function GearFilters({ categories, result }: Props) {
  return (
    <div className="mb-8 space-y-4">
      <SearchFilter />

      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
        <CategoryFilter categories={categories} />

        <BrandFilter result={result} />

        <PriceFilter />

        <AvailabilityFilter />

        <SortFilter />

        <ResetFilters />
      </div>
    </div>
  );
}
