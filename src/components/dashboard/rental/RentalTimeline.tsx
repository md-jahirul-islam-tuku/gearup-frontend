import { CheckCircle2, Circle } from "lucide-react";

const steps = ["PLACED", "CONFIRMED", "PICKED_UP", "RETURNED"];

type Props = {
  status: string;
};

export default function RentalTimeline({ status }: Props) {
  const current = steps.indexOf(status);

  return (
    <div className="rounded-xl border p-6">
      <h3 className="mb-6 text-xl font-semibold">Rental Progress</h3>

      <div className="space-y-6">
        {steps.map((step, index) => {
          const completed = index <= current;

          return (
            <div key={step} className="flex items-center gap-4">
              {completed ? (
                <CheckCircle2 className="text-green-600" />
              ) : (
                <Circle className="text-muted-foreground" />
              )}

              <span>{step.replace("_", " ")}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
