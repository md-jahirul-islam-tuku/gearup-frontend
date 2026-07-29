import { cn } from "@/lib/utils";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

export default function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-2 text-center", className)}>
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>

      {subtitle && (
        <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
