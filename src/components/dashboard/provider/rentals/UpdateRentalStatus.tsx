"use client";

import { useActionState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

import { TRental } from "@/types/rental";
import { ActionState } from "@/types/action";
import { updateRentalStatusAction } from "./_actions/updateRentalStatusAction";
type Props = {
  rental: TRental;
  onSuccess?: () => void;
};

const initialState: ActionState = {
  success: false,
  message: "",
};

const nextStatus = {
  PLACED: "CONFIRMED",
  CONFIRMED: "PICKED_UP",
  PICKED_UP: "RETURNED",
} as const;

export default function UpdateRentalStatus({ rental, onSuccess }: Props) {
  const router = useRouter();

  const next = nextStatus[rental.status as keyof typeof nextStatus];

  const action = updateRentalStatusAction.bind(null, rental.id);

  const [state, formAction, pending] = useActionState(action, initialState);

  const toastShown = useRef(false);

  useEffect(() => {
    if (!state.message) return;

    if (toastShown.current) return;

    toastShown.current = true;

    if (state.success) {
      toast.success(state.message);
      onSuccess?.();
      router.refresh();
    } else {
      toast.error(state.message);
    }
  }, [state, onSuccess, router]);

  if (!next) {
    return (
      <Button disabled className="w-full">
        Completed
      </Button>
    );
  }

  return (
    <form action={formAction}>
      <input type="hidden" name="status" value={next} />

      <Button type="submit" disabled={pending} className="w-full">
        {pending ? "Updating..." : `Mark as ${next}`}
      </Button>
    </form>
  );
}
