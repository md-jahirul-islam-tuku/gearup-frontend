"use client";

import { useActionState, useEffect } from "react";

import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import { TUser } from "@/types/user";
import { ActionState } from "@/types/action";

import { updateUserStatusAction } from "@/app/(dashboardGroup)/dashboard/admin/users/_actions/updateUserStatusAction";

type Props = {
  user: TUser;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const initialState: ActionState<null> = {
  success: false,
  message: "",
};

export default function UpdateUserStatusDialog({
  user,
  open,
  onOpenChange,
}: Props) {
  const actionWithId = updateUserStatusAction.bind(null, user.id);

  const [state, action, pending] = useActionState(actionWithId, initialState);

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);

      onOpenChange(false);
    } else {
      toast.error(state.message);
    }
  }, [state, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {user.status === "ACTIVE" ? "Suspend User?" : "Activate User?"}
          </DialogTitle>
        </DialogHeader>

        <form action={action}>
          <input
            type="hidden"
            name="status"
            value={user.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE"}
          />

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={pending}>
              {pending ? "Updating..." : "Confirm"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
