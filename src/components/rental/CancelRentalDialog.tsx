"use client";

import { useState, useTransition } from "react";
import { Loader2, XCircle } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { cancelRentalAction } from "@/actions/rental/cancelRentalAction";

type Props = {
  rentalId: string;
};

export default function CancelRentalDialog({ rentalId }: Props) {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleCancel = () => {
    startTransition(async () => {
      const result = await cancelRentalAction(rentalId);

      if (result.success) {
        toast.success(result.message);
        setOpen(false);
      } else {
        toast.error(result.message);
      }
    });
  };

  return (
    <>
      {/* Open Dialog Button */}
      <Button type="button" variant="destructive" onClick={() => setOpen(true)}>
        <XCircle className="mr-2 size-4" />
        Cancel Rental
      </Button>

      {/* Controlled Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Cancel Rental?</DialogTitle>

            <DialogDescription>
              Are you sure you want to cancel this rental? This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              disabled={isPending}
              onClick={() => setOpen(false)}
            >
              Keep Rental
            </Button>

            <Button
              type="button"
              variant="destructive"
              onClick={handleCancel}
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" />
                  Cancelling...
                </>
              ) : (
                <>
                  <XCircle className="mr-2 size-4" />
                  Yes, Cancel Rental
                </>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
