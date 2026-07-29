import { TGear } from "./gear";

export type TRentalStatus =
  | "PENDING"
  | "CONFIRMED"
  | "ONGOING"
  | "RETURNED"
  | "CANCELLED";

export type TRental = {
  id: string;

  gearItemId: string;
  customerId: string;

  quantity: number;

  startDate: string;
  endDate: string;

  totalPrice: string;

  status: TRentalStatus;

  createdAt: string;
  updatedAt: string;

  gearItem: TGear;
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

export type TMyRentalsResponse = {
  success: boolean;
  message: string;
  data: TRental[];
};