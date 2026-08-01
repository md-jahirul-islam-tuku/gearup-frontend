
export type TRentalStatus =
  "PLACED" | "CONFIRMED" | "PICKED_UP" | "RETURNED" | "CANCELLED";

export type TRental = {
  id: string;

  customerId: string;

  gearItemId: string;

  quantity: number;

  startDate: string;

  endDate: string;

  totalAmount: string;

  status: TRentalStatus;

  createdAt: string;

  updatedAt: string;

  customer: {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
    profileImage: string | null;
  };

  gearItem: {
    id: string;

    name: string;

    description: string;

    brand: string;

    pricePerDay: string;

    stock: number;

    isAvailable: boolean;

    images: string[];

    category: {
      id: string;
      name: string;
      slug: string;
      description: string;
    };

    provider: {
      id: string;
      name: string;
      email: string;
      role: string;
      status: string;
      profileImage: string | null;
    };
  };

  payment: {
    id: string;

    stripeSessionId: string;

    transactionId: string;

    amount: string;

    provider: string;

    status: string;

    paidAt: string | null;
  };
};

export type TCreateRentalPayload = {
  gearItemId: string;
  quantity: number;
  startDate: string;
  endDate: string;
};

export type TCreateRentalResponse = {
  success: boolean;
  message: string;
  data: TRental;
};

export type TMyRentalResponse = {
  success: boolean;
  message: string;
  data: TRental[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
};
