import { TRental } from "./rental";

export type TProviderOverview = {
  totalGears: number;
  availableGears: number;
  rentedGears: number;
  totalRevenue: number;
  recentRentals: TRental[];
};
