import { Button } from "@/components/ui/button";

import { TRental } from "@/types/rental";

type Props = {
  rental: TRental;
};

export default function RentalActions({ rental }: Props) {
  return (
    <Button variant="outline" size="sm">
      View
    </Button>
  );
}
