import { Input } from "@/components/ui/input";

type Props = {
  defaultValue?: string | null;
};

export default function AvatarUploader({ defaultValue }: Props) {
  return (
    <Input
      name="profileImage"
      placeholder="Profile Image URL"
      defaultValue={defaultValue ?? ""}
    />
  );
}
