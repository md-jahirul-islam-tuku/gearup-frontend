import { Badge } from "@/components/ui/badge";
import { TUserRole, TUserStatus } from "@/types/user";

export function UserRoleBadge({ role }: { role: TUserRole }) {
  switch (role) {
    case "ADMIN":
      return <Badge variant="destructive">Admin</Badge>;

    case "PROVIDER":
      return <Badge>Provider</Badge>;

    default:
      return <Badge variant="secondary">Customer</Badge>;
  }
}

export function UserStatusBadge({ status }: { status: TUserStatus }) {
  return (
    <Badge variant={status === "ACTIVE" ? "default" : "destructive"}>
      {status}
    </Badge>
  );
}
