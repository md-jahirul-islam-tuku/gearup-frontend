import { TRentalStatus } from "./rental";

export type TPaymentStatus = "PENDING" | "PAID" | "FAILED";

export type TPayment = {
  id: string;
  rentalId: string;

  stripeSessionId: string;
  transactionId: string;

  amount: string;

  provider: string;

  status: TPaymentStatus;

  paidAt: string;

  createdAt: string;
  updatedAt: string;

  rentalOrder: {
    id: string;

    quantity: number;

    startDate: string;

    endDate: string;

    totalAmount: string;

    status: TRentalStatus;

    customer: {
      id: string;
      name: string;
      email: string;
      role: string;
      status: string;
    };

    gearItem: {
      id: string;

      name: string;

      description: string;

      brand: string;

      providerId: string;

      pricePerDay: string;

      stock: number;

      isAvailable: boolean;

      images: string[];

      category: {
        id: string;
        name: string;
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
  };
};

export type TMyPaymentResponse = {
  success: boolean;

  message: string;

  data: TPayment[];

  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
};
