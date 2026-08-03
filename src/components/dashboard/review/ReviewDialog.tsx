"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import ReviewForm from "./ReviewForm";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;

  rentalOrderId: string;
  gearItemId: string;
};

export default function ReviewDialog({
  open,
  onOpenChange,
  rentalOrderId,
  gearItemId,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Leave Your Review</DialogTitle>
        </DialogHeader>

        <ReviewForm
          rentalOrderId={rentalOrderId}
          gearItemId={gearItemId}
          onSuccess={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
