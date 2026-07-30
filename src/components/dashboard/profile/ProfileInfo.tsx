type Props = {
  label: string;
  value: string;
};

export default function ProfileInfo({ label, value }: Props) {
  return (
    <div className="flex items-center justify-between border-b py-3">
      <span className="text-muted-foreground">{label}</span>

      <span className="font-medium">{value}</span>
    </div>
  );
}
