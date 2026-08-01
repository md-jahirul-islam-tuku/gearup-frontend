"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { TUser } from "@/types/user";

import UpdateUserStatusDialog from "./UpdateUserStatusDialog";

type Props = {
  user: TUser;
};

export default function UserActions({ user }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        size="sm"
        variant={user.status === "ACTIVE" ? "destructive" : "default"}
        onClick={() => setOpen(true)}
      >
        {user.status === "ACTIVE" ? "Suspend" : "Activate"}
      </Button>

      <UpdateUserStatusDialog user={user} open={open} onOpenChange={setOpen} />
    </>
  );
}
