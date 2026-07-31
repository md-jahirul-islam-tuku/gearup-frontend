"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { ActionState } from "@/types/action";
import { TGear } from "@/types/gear";
import { TCategory } from "@/types/category";

import GearForm from "./GearForm";

import { createGearAction } from "@/app/(dashboardGroup)/dashboard/provider/gears/create/_actions/createGearAction";

type Props = {
  categories: TCategory[];
};

const initialState: ActionState<TGear> = {
  success: false,
  message: "",
};

export default function CreateGearForm({ categories }: Props) {
  const router = useRouter();

  const [state, action, pending] = useActionState(
    createGearAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      router.push("/dashboard/provider/gears");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  return (
    <form action={action}>
      <GearForm
        categories={categories}
        pending={pending}
        errors={state.errorDetails}
        submitText="Create Gear"
      />
    </form>
  );
}
