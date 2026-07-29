export type TCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type TProvider = {
  id: string;
  name: string;
  email: string;
  role: "PROVIDER";
  status: "ACTIVE" | "SUSPENDED";
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TGear = {
  id: string;
  name: string;
  description: string;
  brand: string;
  pricePerDay: string;
  stock: number;
  isAvailable: boolean;
  images: string[];

  providerId: string;
  categoryId: string;

  createdAt: string;
  updatedAt: string;

  category: TCategory;
  provider: TProvider;
};

export type TGearMeta = {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
};

export type TGearListResponse = {
  success: boolean;
  message: string;
  data: {
    meta: TGearMeta;
    data: TGear[];
  };
};

export type TGearDetailsResponse = {
  success: boolean;
  message: string;
  data: TGear;
};
