"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import RatingInput from "./RatingInput";

import { reviewSchema, ReviewFormValues } from "@/schemas/review.schema";
import { createReviewAction } from "@/services/review/createReviewAction";

type Props = {
  rentalOrderId: string;
  gearItemId: string;
  onSuccess?: () => void;
};

export default function ReviewForm({
  rentalOrderId,
  gearItemId,
  onSuccess,
}: Props) {
  const [rating, setRating] = useState(5);

  const [isPending, startTransition] = useTransition();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ReviewFormValues>({
    resolver: zodResolver(reviewSchema),

    defaultValues: {
      comment: "",
    },
  });

  const onSubmit = (values: ReviewFormValues) => {
    if (rating < 1 || rating > 5) {
      toast.error("Please select a rating");
      return;
    }

    startTransition(async () => {
      try {
        await createReviewAction({
          rentalOrderId,
          gearItemId,
          rating,
          comment: values.comment,
        });

        toast.success("Review submitted successfully");

        reset();
        setRating(5);
        onSuccess?.();
      } catch (error) {
        toast.error(
          error instanceof Error ? error.message : "Something went wrong",
        );
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium">Rating</label>

        <RatingInput value={rating} onChange={setRating} />
      </div>

      <div>
        <Textarea
          rows={5}
          placeholder="Write your experience..."
          {...register("comment")}
        />

        {errors.comment && (
          <p className="mt-1 text-sm text-destructive">
            {errors.comment.message}
          </p>
        )}
      </div>

      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Submitting..." : "Submit Review"}
      </Button>
    </form>
  );
}
