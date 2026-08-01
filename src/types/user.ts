export type TUserRole = "ADMIN" | "CUSTOMER" | "PROVIDER";

export type TUserStatus = "ACTIVE" | "BLOCKED";

export type TUser = {
  id: string;
  name: string;
  email: string;
  role: TUserRole;
  status: TUserStatus;
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TUsersResponse = {
  success: boolean;
  message: string;
  data: TUser[];
  meta: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
};
