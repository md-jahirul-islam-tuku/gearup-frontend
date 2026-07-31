"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TGear } from "@/types/gear";

import DeleteGearDialog from "./DeleteGearDialog";
import Link from "next/link";

type Props = {
  gear: TGear;
};

export default function GearActions({ gear }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex gap-2">
        <Link
          href={`/dashboard/provider/gears/${gear.id}/edit`}
          className="flex-1"
        >
          <Button variant="outline" className="w-full cursor-pointer">
            Edit
          </Button>
        </Link>

        <Button
          variant="destructive"
          className="flex-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          Delete
        </Button>
      </div>

      <DeleteGearDialog id={gear.id} open={open} onOpenChange={setOpen} />
    </>
  );
}
