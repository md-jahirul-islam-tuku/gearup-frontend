"use client";

import { Button } from "@/components/ui/button";
import { TGear } from "@/types/gear";

type Props = {
  gear: TGear;
};

export default function GearActions({ gear }: Props) {
  return (
    <div className="flex gap-2">
      <Button variant="outline" className="flex-1">
        Edit
      </Button>

      <Button variant="destructive" className="flex-1">
        Delete
      </Button>
    </div>
  );
}
