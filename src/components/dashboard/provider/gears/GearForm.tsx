"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { TCategory } from "@/types/category";
import { TGear } from "@/types/gear";
import FormError from "@/components/shared/FormError/FormError";

type Props = {
  gear?: TGear;
  categories: TCategory[];
  pending?: boolean;
  submitText?: string;
  errors?: Record<string, string[] | undefined>;
};

export default function GearForm({
  gear,
  categories,
  pending,
  submitText = "Save",
  errors,
}: Props) {
  return (
    <Card className="space-y-6 p-6">
      {/* Name */}
      <div className="space-y-2">
        <label>Name</label>

        <Input name="name" defaultValue={gear?.name} placeholder="Gear name" />
        <FormError error={errors?.name?.[0]} />
      </div>

      {/* Brand */}
      <div className="space-y-2">
        <label>Brand</label>

        <Input name="brand" defaultValue={gear?.brand} placeholder="Brand" />
        <FormError error={errors?.brand?.[0]} />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label>Description</label>

        <Textarea
          name="description"
          defaultValue={gear?.description}
          rows={5}
        />
        <FormError error={errors?.description?.[0]} />
      </div>

      {/* Price */}
      <div className="space-y-2">
        <label>Price Per Day</label>

        <Input
          name="pricePerDay"
          type="number"
          defaultValue={gear?.pricePerDay}
        />
        <FormError error={errors?.pricePerDay?.[0]} />
      </div>

      {/* Stock */}
      <div className="space-y-2">
        <label>Stock</label>

        <Input name="stock" type="number" defaultValue={gear?.stock} />
        <FormError error={errors?.stock?.[0]} />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label>Category</label>

        <select
          name="categoryId"
          defaultValue={gear?.categoryId}
          className="w-full rounded-md border p-2"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <FormError error={errors?.categoryId?.[0]} />
      </div>

      {/* Image */}
      <div className="space-y-2">
        <label>Image URL</label>

        <Input name="image" defaultValue={gear?.images?.[0]} />
        <FormError error={errors?.image?.[0]} />
      </div>

      <Button
        type="submit"
        onClick={() => console.log("Button clicked")}
        className="w-full cursor-pointer"
        disabled={pending}
      >
        {pending ? "Updating..." : submitText}
      </Button>
    </Card>
  );
}
