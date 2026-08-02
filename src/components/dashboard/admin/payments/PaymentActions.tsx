"use client";

import { useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import { TPayment } from "@/types/payment";

import PaymentDetailsDialog from "./PaymentDetailsDialog";
import { TUsersResponse } from "@/types/user";

type Props = {
  payment: TPayment;
  users: TUsersResponse;
};

export default function PaymentActions({ payment, users }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="link"
        size="icon"
        className="cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <SquareArrowOutUpRight className="size-5 text-primary transition-transform hover:scale-125" />
      </Button>

      <PaymentDetailsDialog
        payment={payment}
        users={users}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
