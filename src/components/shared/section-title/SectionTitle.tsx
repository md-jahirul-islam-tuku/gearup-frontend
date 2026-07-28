type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="space-y-2 text-center">
      <h2 className="text-3xl font-bold">{title}</h2>

      {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
