"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Badge } from "@/components/ui/badge";

import { TGear } from "@/types/gear";

type Props = {
  gear: TGear;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function GearDetailsDialog({ gear, open, onOpenChange }: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-4xl">
        <DialogHeader>
          <DialogTitle>Gear Details</DialogTitle>
        </DialogHeader>

        <div className="space-y-8">
          {/* Images */}

          <section>
            <h3 className="mb-3 font-semibold">Images</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {gear.images.map((image, index) => (
                <Image
                  key={index}
                  src={image}
                  alt={`${gear.name}-${index}`}
                  width={700}
                  height={400}
                  className="h-56 w-full rounded-lg border object-cover"
                />
              ))}
            </div>
          </section>

          {/* Gear */}

          <section>
            <h3 className="mb-3 font-semibold">Gear Information</h3>

            <div className="grid gap-4 rounded-lg border p-5 md:grid-cols-2">
              <Info label="Name" value={gear.name} />

              <Info label="Brand" value={gear.brand} />

              <Info label="Category" value={gear.category.name} />

              <Info label="Price / Day" value={`$${gear.pricePerDay}`} />

              <Info label="Stock" value={String(gear.stock)} />

              <div>
                <p className="text-sm text-muted-foreground">Availability</p>

                {gear.isAvailable ? (
                  <Badge>Available</Badge>
                ) : (
                  <Badge variant="destructive">Out of Stock</Badge>
                )}
              </div>

              <div className="md:col-span-2">
                <p className="text-sm text-muted-foreground">Description</p>

                <p className="mt-1">{gear.description}</p>
              </div>
            </div>
          </section>

          {/* Provider */}

          <section>
            <h3 className="mb-3 font-semibold">Provider</h3>

            <div className="grid gap-4 rounded-lg border p-5 md:grid-cols-2">
              <Info label="Name" value={gear.provider.name} />

              <Info label="Email" value={gear.provider.email} />

              <Info label="Role" value={gear.provider.role} />

              <Info label="Status" value={gear.provider.status} />
            </div>
          </section>

          {/* Metadata */}

          <section>
            <h3 className="mb-3 font-semibold">Metadata</h3>

            <div className="grid gap-4 rounded-lg border p-5 md:grid-cols-2">
              <Info
                label="Created"
                value={new Date(gear.createdAt).toLocaleString()}
              />

              <Info
                label="Updated"
                value={new Date(gear.updatedAt).toLocaleString()}
              />
            </div>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-sm text-muted-foreground">{label}</p>

      <p className="break-all font-medium">{value}</p>
    </div>
  );
}
