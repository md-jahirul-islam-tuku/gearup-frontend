"use client";

import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

import { TGear } from "@/types/gear";
import { TCategory } from "@/types/category";
import { ActionState } from "@/types/action";

import { updateGearAction } from "@/app/(dashboardGroup)/dashboard/provider/gears/[id]/edit/_actions/updateGearAction";
import GearForm from "./GearForm";

type Props = {
  gear: TGear;
  categories: TCategory[];
};

const initialState: ActionState<TGear> = {
  success: false,
  message: "",
};

export default function EditGearForm({ gear, categories }: Props) {
  const router = useRouter();

  const updateAction = updateGearAction.bind(null, gear.id);
  const [state, action, pending] = useActionState(updateAction, initialState);

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
    <form action={action} key={gear.updatedAt}>
      <GearForm
        gear={gear}
        categories={categories}
        pending={pending}
        submitText="Update Gear"
        errors={state.errorDetails}
      />
    </form>
  );
}
