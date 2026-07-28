import Link from "next/link";
import { Card } from "@/components/ui/card";

type Props = {
  name: string;
  description: string;
  icon: React.ElementType;
};

export default function CategoryCard({ name, description, icon: Icon }: Props) {
  return (
    <Link href="/gear">
      <Card className="group h-full cursor-pointer p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <h3 className="mb-2 text-lg font-semibold transition-colors group-hover:text-primary">
          {name}
        </h3>

        <p className="text-sm text-muted-foreground">{description}</p>
      </Card>
    </Link>
  );
}
