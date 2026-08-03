import Image from "next/image";
import { Star, Mail, CalendarDays, MessageSquare } from "lucide-react";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { TReview } from "@/types/review";

type Props = {
  averageRating: string;
  totalReviews: number;
  review: TReview;
};

export default function ReviewCard({
  averageRating,
  totalReviews,
  review,
}: Props) {
  return (
    <Card className="overflow-hidden">
      {/* Header */}
      <CardHeader className="bg-muted/30">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Average Rating</p>

            <div className="mt-1 flex items-center gap-2">
              <Star className="size-5 fill-yellow-400 text-yellow-400" />

              <span className="text-2xl font-bold">{averageRating}</span>

              <span className="text-sm text-muted-foreground">/ 5</span>
            </div>
          </div>

          <Badge variant="secondary" className="px-3 py-1">
            {totalReviews} {totalReviews === 1 ? "Review" : "Reviews"}
          </Badge>
        </div>
      </CardHeader>

      <Separator />

      <CardContent className="space-y-5 p-6">
        {/* Customer */}
        <div className="flex items-center gap-4">
          {review.customer.profileImage ? (
            <Image
              src={review.customer.profileImage}
              alt={review.customer.name}
              width={52}
              height={52}
              className="size-13 rounded-full object-cover"
            />
          ) : (
            <div className="flex size-13 items-center justify-center rounded-full bg-primary/10 text-lg font-semibold text-primary">
              {review.customer.name.charAt(0).toUpperCase()}
            </div>
          )}

          <div className="min-w-0">
            <h3 className="font-semibold">{review.customer.name}</h3>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Mail className="size-3.5" />
              <span className="truncate">{review.customer.email}</span>
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`size-5 ${
                index < review.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}

          <Badge variant="outline" className="ml-2">
            {review.rating}/5
          </Badge>
        </div>

        {/* Comment */}
        <div className="rounded-lg bg-muted/40 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-medium">
            <MessageSquare className="size-4" />
            Review
          </div>

          <p className="text-sm leading-6 text-muted-foreground">
            {review.comment}
          </p>
        </div>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />

          <span>
            Reviewed on{" "}
            {new Date(review.createdAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
