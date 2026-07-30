
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  name: string;
  image?: string | null;
};

export default function ProfileAvatar({ name, image }: Props) {
  return (
    <Avatar className="mx-auto h-28 w-28">
      <AvatarImage src={image ?? ""} />

      <AvatarFallback className="text-3xl">
        {name.charAt(0).toUpperCase()}
      </AvatarFallback>
    </Avatar>
  );
}
