import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BrandRoot, Category } from "./allTypes/allTypes";





export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  endpoints: (builder) => ({
    getCategoryList: builder.query<Category[], void>({
      query: () => "/user/products/category-list",
    }),
    getBrandList: builder.query<BrandRoot, void>({
      query: () => "/user/products/brand-list",
    }),
  }),
});


export const { useGetCategoryListQuery , useGetBrandListQuery} = apiSlice;
