import ReviewCard from "@/components/dashboard/review/ReviewCard";
import { Card } from "@/components/ui/card";
import { getGearReviews } from "@/services/review/getGearReviewsAction";

type Props = {
  gearId: string;
};

export default async function ReviewList({ gearId }: Props) {
  const result = await getGearReviews(gearId);

  const averageRating = result.data.averageRating;
  const totalReviews = result.data.totalReviews;
  const reviews = result.data.reviews;

  if (!result.success || !result.data) {
    return (
      <Card className="p-6">
        <h2 className="text-2xl font-semibold">Customer Reviews</h2>

        <p className="mt-2 text-sm text-muted-foreground">
          Failed to load reviews.
        </p>
      </Card>
    );
  }

  if (!reviews.length) {
    return (
      <Card className="p-6">
        <h2 className="text-2xl font-semibold">Customer Reviews</h2>

        <p className="mt-2 text-muted-foreground">
          No reviews yet for this gear.
        </p>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Customer Reviews</h2>

        <p className="mt-1 text-sm text-muted-foreground">
          {averageRating} average rating · {totalReviews}{" "}
          {totalReviews === 1 ? "review" : "reviews"}
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((review) => (
          <ReviewCard
            key={review.id}
            averageRating={averageRating}
            totalReviews={totalReviews}
            review={review}
          />
        ))}
      </div>
    </div>
  );
}
