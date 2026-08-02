"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import { TCategory } from "@/types/category";

import DeleteCategoryDialog from "./DeleteCategoryDialog";

type Props = {
  category: TCategory;
};

export default function CategoryActions({ category }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm">
          <Link href={`/dashboard/admin/categories/${category.id}/edit`}>
            Edit
          </Link>
        </Button>

        <Button size="sm" variant="destructive" onClick={() => setOpen(true)}>
          Delete
        </Button>
      </div>

      <DeleteCategoryDialog
        id={category.id}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
