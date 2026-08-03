/* eslint-disable @typescript-eslint/no-explicit-any */

import { TCategoriesResponse } from "@/types/category";
import GearFilters from "./GearFilter";
import GearGrid from "./GearGrid";

type Props = {
  result: any;
  categories: TCategoriesResponse;
};

export default function GearPage({ result, categories }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="m-8">
        <h1 className="text-3xl font-bold">Browse All Gear</h1>

        <p className="mt-2 text-muted-foreground">
          Find quality rental equipment for your next adventure.
        </p>
      </div>

      <GearFilters categories={categories} result={result} />

      <GearGrid gear={result.data.data} meta={result.data.meta} />
    </div>
  );
}
