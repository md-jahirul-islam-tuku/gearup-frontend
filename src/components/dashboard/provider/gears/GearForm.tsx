"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import { TCategory } from "@/types/category";
import { TGear } from "@/types/gear";
import FormError from "@/components/shared/FormError/FormError";
import { useState } from "react";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  const [images, setImages] = useState<string[]>(
    gear?.images?.length ? [...gear.images, "", "", ""].slice(0, 4) : [""],
  );
  const updateImage = (index: number, value: string) => {
    const copy = [...images];
    copy[index] = value;
    setImages(copy);
  };

  const addImage = () => {
    if (images.length < 4) {
      setImages([...images, ""]);
    }
  };

  const removeImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };
  const [categoryId, setCategoryId] = useState<string | null>(
    gear?.categoryId ?? null,
  );
  return (
    <Card className="grid gap-6 md:grid-cols-2 p-6">
      {/* Name */}
      <div className="space-y-2">
        <label>Gear Name</label>

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
          min={1}
          step="0.01"
          defaultValue={gear?.pricePerDay}
        />
        <FormError error={errors?.pricePerDay?.[0]} />
      </div>

      {/* Stock */}
      <div className="space-y-2">
        <label>Stock</label>

        <Input
          name="stock"
          type="number"
          min={0}
          step={1}
          defaultValue={gear?.stock}
        />
        <FormError error={errors?.stock?.[0]} />
      </div>

      {/* Category */}
      <div className="space-y-2">
        <label>Category</label>

        <input type="hidden" name="categoryId" value={categoryId ?? ""} />
        <Select value={categoryId} onValueChange={setCategoryId}>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>

          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormError error={errors?.categoryId?.[0]} />
      </div>

      {/* Image */}
      <div className="space-y-4 md:col-span-2">
        <label className="font-medium">Images</label>

        {images.map((image, index) => (
          <div key={index} className="space-y-3 rounded-lg border p-4">
            <div className="flex gap-2">
              <Input
                name={`image${index + 1}`}
                value={image}
                placeholder={`Image URL ${index + 1}`}
                onChange={(e) => updateImage(index, e.target.value)}
              />

              {images.length > 1 && (
                <Button
                  type="button"
                  variant="destructive"
                  onClick={() => removeImage(index)}
                >
                  Remove
                </Button>
              )}
            </div>

            {image && (
              <Image
                src={image}
                alt={`Preview ${index + 1}`}
                width={600}
                height={300}
                className="h-40 w-full rounded-lg border object-cover"
              />
            )}
          </div>
        ))}

        {images.length < 4 && (
          <Button type="button" variant="outline" onClick={addImage}>
            + Add Image
          </Button>
        )}

        <FormError error={errors?.images?.[0]} />
      </div>

      <Button
        type="submit"
        className="w-full cursor-pointer md:w-auto"
        disabled={pending}
      >
        {pending ? "Submitting..." : submitText}
      </Button>
    </Card>
  );
}
