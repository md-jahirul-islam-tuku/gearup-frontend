"use client";

import { useState } from "react";
import { SquareArrowOutUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

import GearDetailsDialog from "./GearDetailsDialog";

import { TGear } from "@/types/gear";

type Props = {
  gear: TGear;
};

export default function GearActions({ gear }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="ghost"
        size="icon"
        onClick={() => setOpen(true)}
      >
        <SquareArrowOutUpRight className="size-5" />
      </Button>

      <GearDetailsDialog gear={gear} open={open} onOpenChange={setOpen} />
    </>
  );
}
