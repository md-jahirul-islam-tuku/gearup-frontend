export type TCategory = {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

export type TCategoriesResponse = {
  success: boolean;
  message: string;
  data: {
    data: TCategory[];
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
  };
};

export type TCategoryResponse = {
  success: boolean;
  message: string;
  data: TCategory;
};
