"use server";

import { revalidateTag } from "next/cache";

import { cancelRental } from "@/services/rental/cancelRental";

export const cancelRentalAction = async (rentalId: string) => {
  try {
    const result = await cancelRental(rentalId);

    revalidateTag("rentals", { expire: 0 });
    revalidateTag(`rental-${rentalId}`, { expire: 0 });

    return {
      success: true,
      message: result.message || "Rental cancelled successfully",
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Failed to cancel rental",
    };
  }
};
