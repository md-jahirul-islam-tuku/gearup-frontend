"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { ActionState } from "@/types/action";
import { TCategory } from "@/types/category";

import CategoryForm from "./CategoryForm";
import { createCategoryAction } from "@/app/(dashboardGroup)/dashboard/admin/categories/_actions/createCategoryAction";

const initialState: ActionState<TCategory> = {
  success: false,
  message: "",
};

export default function CreateCategoryForm() {
  const router = useRouter();

  const [state, action, pending] = useActionState(
    createCategoryAction,
    initialState,
  );

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
        pending={pending}
        submitText="Create Category"
        errors={state.errorDetails}
      />
    </form>
  );
}
