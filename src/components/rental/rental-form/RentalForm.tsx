"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";

import { TGear } from "@/types/gear";

import QuantityInput from "./QuantityInput";
import DateRangePicker from "./DateRangePicker";
import RentalSummary from "./RentalSummary";
import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";

import { createRentalAction } from "@/app/(public)/gear/[id]/rent/_actions/createRentalAction";
import FormError from "@/components/shared/FormError/FormError";

type Props = {
  gear: TGear;
};

type RentalState = {
  success: boolean;
  message: string;
  errorDetails?: Record<string, string[]>;
};

export default function RentalForm({ gear }: Props) {
  const [quantity, setQuantity] = useState(1);

  const [startDate, setStartDate] = useState("");

  const [endDate, setEndDate] = useState("");

  const totalDays = useMemo(() => {
    if (!startDate || !endDate) return 1;

    const start = new Date(startDate);

    const end = new Date(endDate);

    return Math.max(
      1,
      Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)) + 1,
    );
  }, [startDate, endDate]);

  const initialState: RentalState = {
    success: false,
    message: "",
    errorDetails: {},
  };

  const [state, formAction, isPending] = useActionState(
    createRentalAction,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-8">
      <QuantityInput
        value={quantity}
        stock={gear.stock}
        onChange={setQuantity}
      />

      <DateRangePicker
        startDate={startDate}
        endDate={endDate}
        onStartDateChange={setStartDate}
        onEndDateChange={setEndDate}
      />

      <RentalSummary
        pricePerDay={Number(gear.pricePerDay)}
        quantity={quantity}
        totalDays={totalDays}
      />

      <input hidden readOnly name="gearItemId" value={gear.id} />

      <input hidden readOnly name="quantity" value={quantity} />
      <FormError error={state.errorDetails?.quantity?.[0]} />

      <input hidden readOnly name="startDate" value={startDate} />
      <p className="text-sm text-red-500">
        {state.errorDetails?.startDate?.[0]}
      </p>

      <input hidden readOnly name="endDate" value={endDate} />
      <FormError error={state.errorDetails?.endDate?.[0]} />

      <Button type="submit" className="w-full" size="lg" disabled={isPending}>
        {isPending ? "Creating Rental..." : "Rent Now"}
      </Button>
    </form>
  );
}
