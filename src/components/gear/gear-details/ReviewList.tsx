import { Card } from "@/components/ui/card";

type Props = {
  gearId: string;
};

export default function ReviewList({ gearId }: Props) {
  return (
    <Card className="space-y-6 p-6">
      <h2 className="text-2xl font-semibold">Customer Reviews</h2>

      <p className="text-muted-foreground">Reviews for gear ID: {gearId}</p>

      <p className="text-sm text-muted-foreground">
        Reviews will be loaded from the API in the next step.
      </p>
    </Card>
  );
}
