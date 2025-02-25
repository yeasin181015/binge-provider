"use client";
import { ElementType, useEffect, useState } from "react";
import { RowProps } from "./SliderRowForGenre";
import RowSkeleton from "./RowSkeleton";

export default function withPagination(
  Component: ElementType,
  props: RowProps
) {
  return function WithPagination() {
    const { category, type, token, tile, isLoading } = props;
    const [productList, setProductList] = useState<any[]>([]);
    console.log(category, "catttt");

    useEffect(() => {
      const fetchProducts = async () => {
        if (
          !(
            category?.category_type === "ad_category" && category?.ad_type == 1
          ) &&
          category?.category_type !== "tvod"
        ) {
          const ProductRequestbody = {
            category_id: category?.category_id,
            category_type: category?.category_type,
            page: -1,
            page_size: -1,
          };
          let ProductRes = await fetch(
            "https://web-api-staging.binge.buzz/api/v3/page/category/products",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
                "Device-Type": "websdk",
              },
              body: JSON.stringify(ProductRequestbody),
            }
          ).then((response) => response.json());
          if (
            ProductRes.data &&
            ProductRes.data.products &&
            ProductRes.data.products.length
          ) {
            setProductList(ProductRes.data.products);
            // setTotalProduct(ProductRes.data.total);
          }
        }
      };
      fetchProducts();
    }, [category, token]);

    if (productList && productList.length > 0) {
      return <Component data={productList} isLoading={isLoading} />;
    }
  };
}
