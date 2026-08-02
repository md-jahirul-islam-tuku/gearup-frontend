"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { SquareArrowOutUpRight } from "lucide-react";

import PaymentDetailsDialog from "./PaymentDetailsDialog";
import { TPayment } from "@/types/payment";

export default function PaymentActions({ payment }: { payment: TPayment }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="link" size="icon" onClick={() => setOpen(true)}>
        <SquareArrowOutUpRight className="size-5" />
      </Button>

      <PaymentDetailsDialog
        payment={payment}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
}
