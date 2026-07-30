import { Card } from "@/components/ui/card";

type Props = {
  customer: {
    name: string;
    email: string;
    role: string;
  };
};

export default function CustomerCard({
  customer,
}: Props) {
  return (
    <Card className="space-y-4 p-6">
      <h3 className="text-xl font-semibold">
        Customer
      </h3>

      <div className="space-y-2">
        <p>{customer.name}</p>

        <p className="text-muted-foreground">
          {customer.email}
        </p>

        <p className="text-sm">
          Role: {customer.role}
        </p>
      </div>
    </Card>
  );
}