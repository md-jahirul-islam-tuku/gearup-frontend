"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import FormError from "@/components/shared/FormError/FormError";

import { TCategory } from "@/types/category";

type Props = {
  category?: TCategory;
  pending?: boolean;
  submitText?: string;
  errors?: Record<string, string[] | undefined>;
};

export default function CategoryForm({
  category,
  pending,
  submitText,
  errors,
}: Props) {
  return (
    <Card className="space-y-6 p-6">
      <div className="space-y-2">
        <label>Name</label>

        <Input name="name" defaultValue={category?.name} />

        <FormError error={errors?.name?.[0]} />
      </div>

      <div className="space-y-2">
        <label>Slug</label>

        <Input name="slug" defaultValue={category?.slug} />

        <FormError error={errors?.slug?.[0]} />
      </div>

      <div className="space-y-2">
        <label>Description</label>

        <Textarea
          rows={5}
          name="description"
          defaultValue={category?.description}
        />

        <FormError error={errors?.description?.[0]} />
      </div>

      <Button type="submit" className="w-full md:w-auto" disabled={pending}>
        {pending ? "Updating..." : submitText}
      </Button>
    </Card>
  );
}
