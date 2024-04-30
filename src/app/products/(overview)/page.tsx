"use client"
import { ProductsContext } from "@/app/context/GetProducts";
import Product from "../../ui/Product";
import Filter from "@/app/ui/Filter";
import { useContext, useEffect, useState } from "react";

const Page = (data) => {
  const [productList] = useContext(ProductsContext);

  function NoDataFound() {
    return (
      <h2 className="text-xl font-semibold dark:text-white">
        No Products found!
      </h2>
    );
  }
  return (
    <div className="flex md:flex-row flex-col gap-x-4 my-10">
      <div className="md:w-1/4 xl:w-1/5 w-full p-4 bg-white border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:text-white">
        <Filter />
      </div>
      <div className="md:w-3/4 xl:w-4/5 w-full">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
          {data.filterData.length === 0 && data.searchItem ? (
            <NoDataFound />
          ) : (
            (data.filterData.length > 0 && data.searchItem
              ? data.filterData
              : productList.productList
            ).map((product) => (
              <Product
                key={product.id}
                stock={product.stock}
                productId={product.id}
                productImage={product.productImage}
                productName={product.productName}
                productBrief={product.productBrief}
                productRating={product.productRating}
                originalPrice={product.originalPrice}
                sellingPrice={product.sellingPrice}
                isDiscount={product.isDiscount}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
