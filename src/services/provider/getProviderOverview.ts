import { ActionState } from "@/types/action";
import { TProviderOverview } from "@/types/provider";
import { getMyGears } from "./getMyGears";
import { getProviderRentals } from "./getProviderRentals";
import { TRentalStatus } from "@/types/rental";

const ACTIVE_RENTAL_STATUSES: TRentalStatus[] = [
  "PLACED",
  "CONFIRMED",
  "PICKED_UP",
];

export async function getProviderOverview(): Promise<
  ActionState<TProviderOverview>
> {
  const [gearResult, rentalResult] = await Promise.all([
    getMyGears({
      page: 1,
      limit: 1000,
    }),
    getProviderRentals({
      page: 1,
      limit: 1000,
    }),
  ]);

  if (!gearResult.success || !gearResult.data) {
    return {
      success: false,
      message: gearResult.message,
    };
  }

  if (!rentalResult.success || !rentalResult.data) {
    return {
      success: false,
      message: rentalResult.message,
    };
  }

  const gears = gearResult.data.data;
  const rentals = rentalResult.data.data;

  const totalGears = gears.length;

  const availableGears = gears.filter((gear) => gear.isAvailable).length;

  const rentedGears = rentals.filter((rental) =>
    ACTIVE_RENTAL_STATUSES.includes(rental.status),
  ).length;

  const totalRevenue = rentals.reduce((sum, rental) => {
    if (rental.payment?.status === "PAID") {
      return sum + Number(rental.payment.amount);
    }

    return sum;
  }, 0);

  const recentRentals = [...rentals]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);

  return {
    success: true,
    message: "Provider overview loaded successfully.",
    data: {
      totalGears,
      availableGears,
      rentedGears,
      totalRevenue,
      recentRentals,
    },
  };
}
