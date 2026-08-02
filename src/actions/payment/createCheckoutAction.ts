"use server";

import { createCheckoutSession } from "@/services/payment/createCheckoutSession";

export async function createCheckoutAction(rentalId: string) {
  const result = await createCheckoutSession(rentalId);

  if (!result.success) {
    throw new Error(result.message);
  }

  return {
    checkoutUrl: result.data.checkoutUrl,
  };
}
