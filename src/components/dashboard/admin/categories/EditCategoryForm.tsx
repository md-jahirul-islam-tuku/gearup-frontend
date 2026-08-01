"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { TCategory } from "@/types/category";
import { ActionState } from "@/types/action";

import CategoryForm from "./CategoryForm";
import { updateCategoryAction } from "@/app/(dashboardGroup)/dashboard/admin/categories/_actions/updateCategoryAction";

type Props = {
  category: TCategory;
};

const initialState: ActionState<TCategory> = {
  success: false,
  message: "",
};

export default function EditCategoryForm({ category }: Props) {
  const router = useRouter();

  const actionWithId = updateCategoryAction.bind(null, category.id);

  const [state, action, pending] = useActionState(actionWithId, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      router.push("/dashboard/admin/categories");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={action}>
      <CategoryForm
        category={category}
        pending={pending}
        submitText="Update Category"
        errors={state.errorDetails}
      />
    </form>
  );
}
