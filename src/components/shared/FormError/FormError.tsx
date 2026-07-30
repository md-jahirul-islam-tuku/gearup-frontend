import { cn } from "@/lib/utils";

type Props = {
  error?: string;
  className?: string;
};

export default function FormError({ error, className }: Props) {
  if (!error) return null;

  return (
    <p className={cn("ml-2 mt-1 text-sm text-destructive", className)}>
      {error}
    </p>
  );
}
