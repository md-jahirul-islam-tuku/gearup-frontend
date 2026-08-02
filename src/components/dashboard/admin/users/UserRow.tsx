import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TUser } from "@/types/user";
import { format } from "date-fns";

import { UserRoleBadge, UserStatusBadge } from "./UserStatusBadge";

import UserActions from "./UserActions";

type Props = {
  user: TUser;
};

export default function UserRow({ user }: Props) {
  return (
    <tr className="border-b text-start">
      <td className="p-4">
        <div className="flex items-center gap-3">
          <Avatar>
            {user.profileImage && <AvatarImage src={user.profileImage} />}

            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>

          <p className="font-medium">{user.name}</p>
        </div>
      </td>

      <td>{user.email}</td>

      <td>
        <UserRoleBadge role={user.role} />
      </td>

      <td>
        <UserStatusBadge status={user.status} />
      </td>

      <td>{format(new Date(user.createdAt), "dd MMM yyyy")}</td>

      <td>
        <UserActions user={user} />
      </td>
    </tr>
  );
}
