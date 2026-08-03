"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import ReviewDialog from "./ReviewDialog";
import { Badge } from "@/components/ui/badge";

type Props = {
  rentalOrderId: string;
  gearItemId: string;

  reviewed?: boolean;
};

export default function ReviewButton({
  rentalOrderId,
  gearItemId,
  reviewed = false,
}: Props) {
  const [open, setOpen] = useState(false);

  if (reviewed) {
    return (
      <Badge
        variant="secondary"
        className="bg-green-100 text-green-700 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400 text-lg"
      >
        Reviewed ✓
      </Badge>
    );
  }

  return (
    <>
      <Button onClick={() => setOpen(true)}>Leave Review</Button>

      <ReviewDialog
        open={open}
        onOpenChange={setOpen}
        rentalOrderId={rentalOrderId}
        gearItemId={gearItemId}
      />
    </>
  );
}
