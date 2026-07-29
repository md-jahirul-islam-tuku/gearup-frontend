import { Card } from "@/components/ui/card";

type Props = {
  provider: {
    name: string;
    email: string;
  };
};

export default function ProviderInfo({ provider }: Props) {
  return (
    <Card className="space-y-2 p-6">
      <h2 className="text-2xl font-semibold">Provider</h2>

      <p>{provider.name}</p>

      <p className="text-muted-foreground">{provider.email}</p>
    </Card>
  );
}
