import Link from "next/link";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";

import { TUser, TUserRole } from "@/types/user";

type Props = {
  user: Pick<
    TUser,
    "name" | "email" | "role" | "status" | "profileImage" | "createdAt"
  >;
};

export default function ProfileCard({ user }: Props) {
  const rolePath: Lowercase<TUserRole> =
    user.role.toLowerCase() as Lowercase<TUserRole>;
  return (
    <Card className="max-w-3xl space-y-8 p-8">
      <ProfileAvatar name={user.name} image={user.profileImage} />

      <div className="space-y-1 text-center">
        <h2 className="text-2xl font-bold">{user.name}</h2>

        <p className="text-muted-foreground">{user.email}</p>
      </div>

      <div>
        <ProfileInfo label="Role" value={user.role} />

        <ProfileInfo label="Status" value={user.status} />

        <ProfileInfo
          label="Joined"
          value={new Date(user.createdAt).toLocaleDateString()}
        />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Link href={`/dashboard/${rolePath}/profile/edit-profile`} className="flex-1">
          <Button className="w-full cursor-pointer">Edit Profile</Button>
        </Link>

        <Link
          href={`/dashboard/${rolePath}/profile/change-password`}
          className="flex-1"
        >
          <Button variant="outline" className="w-full cursor-pointer">
            Change Password
          </Button>
        </Link>
      </div>
    </Card>
  );
}
