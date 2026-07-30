import { TRental } from "@/types/rental";

export function getRentalStats(rentals: TRental[]) {
  const totalRentals = rentals.length;

  const activeRentals = rentals.filter((r) =>
    ["PLACED", "CONFIRMED", "PICKED_UP"].includes(r.status),
  ).length;

  const completedRentals = rentals.filter(
    (r) => r.status === "RETURNED",
  ).length;

  return {
    totalRentals,
    activeRentals,
    completedRentals,
  };
}
