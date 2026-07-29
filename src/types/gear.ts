export interface TCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface TProvider {
  id: string;
  name: string;
  email: string;
  role: "CUSTOMER" | "PROVIDER" | "ADMIN";
  status: "ACTIVE" | "SUSPENDED";
  profileImage: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface TGear {
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
}

export interface TPaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface TGearResponse {
  success: boolean;
  message: string;
  data: {
    meta: TPaginationMeta;
    data: TGear[];
  };
}