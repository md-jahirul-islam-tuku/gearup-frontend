import { Card } from "@/components/ui/card";

type Props = {
  provider: {
    name: string;
    email: string;
  };
};

export default function ProviderCard({ provider }: Props) {
  return (
    <Card className="space-y-4 p-6">
      <h3 className="text-xl font-semibold">Provider</h3>

      <div>
        <p className="font-medium">{provider.name}</p>

        <p className="text-muted-foreground">{provider.email}</p>
      </div>
    </Card>
  );
}
