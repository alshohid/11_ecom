"use client";

import { useGetCategoryListQuery } from "@/redux/ApiSlice";
import React from "react";

const ProductMainPage = () => {
const { data, isLoading, isError, error } = useGetCategoryListQuery();

return <div></div>;
};

export default ProductMainPage;
