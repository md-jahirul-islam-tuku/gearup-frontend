"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { TRental } from "@/types/rental";

import RentalDetailsDialog from "./RentalDetailsDialog";
import { SquareArrowOutUpRight } from "lucide-react";

type Props = {
  rental: TRental;
};

export default function RentalActions({ rental }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="link"
        className=" transition-transform duration-200 hover:scale-125"
        size="sm"
        onClick={() => setOpen(true)}
      >
        <SquareArrowOutUpRight className="size-5 text-primary" />
      </Button>

      <RentalDetailsDialog rental={rental} open={open} onOpenChange={setOpen} />
    </>
  );
}
