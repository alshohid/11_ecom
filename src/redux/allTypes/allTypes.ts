export interface Category {
  id: number;
  categoryName: string;
  categoryImg: string;
  createdAt: string;
  updatedAt: string;
}
export interface BrandRoot {
  status: string;
  data: brand[];
}

export interface brand {
  id: number;
  brandName: string;
  brandImg: string;
  createdAt: string;
  updatedAt: string;
}