"use client";

import { useActionState, useEffect } from "react";
import { redirect } from "next/navigation";

import { toast } from "sonner";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { TUser } from "@/types/user";
import { ActionState } from "@/types/action";

import AvatarUploader from "./AvatarUploader";
import { updateProfileAction } from "@/services/profile/updateProfileAction";

type Props = {
  user: TUser;
};

const initialState: ActionState<TUser> = {
  success: false,
  message: "",
};

export default function EditProfileForm({ user }: Props) {

  const [state, action, pending] = useActionState(
    updateProfileAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
      redirect("/dashboard/customer/profile");
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form key={user.updatedAt} action={action}>
      <Card className="p-6">
        <Input name="name" defaultValue={user.name} placeholder="Full Name" />

        <p className="text-sm text-red-500">{state.errorDetails?.name?.[0]}</p>

        <AvatarUploader defaultValue={user.profileImage} />

        <p className="text-sm text-red-500">
          {state.errorDetails?.profileImage?.[0]}
        </p>

        <Button
          type="submit"
          disabled={pending}
          className="w-full cursor-pointer"
        >
          {pending ? "Saving..." : "Save Changes"}
        </Button>
      </Card>
    </form>
  );
}
