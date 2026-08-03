export type TReview = {
  id: string;

  rating: number;
  comment: string;

  customerId: string;
  gearItemId: string;
  rentalOrderId: string;

  createdAt: string;
  updatedAt: string;

  customer: {
    id: string;
    name: string;
    email: string;
    profileImage: string | null;
  };
};

export type TReviewPayload = {
  rentalOrderId: string;
  gearItemId: string;

  rating: number;
  comment: string;
};

export type TReviewResponse = {
  success: boolean;
  message: string;
  data: TReview;
};

export type TGearReviewsResponse = {
  success: boolean;
  message: string;
  data: {
    averageRating: string;
    totalReviews: number;
    reviews: TReview[];
  };
};
