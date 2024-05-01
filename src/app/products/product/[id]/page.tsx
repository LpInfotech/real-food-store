"use client";
import ProductDetail from "@/app/ui/ProductDetail";
import { useContext } from "react";
import { ProductsContext } from "@/app/context/GetProducts";

const Page = ({ params }: { params: { id: string } }) => {
  const id = Number(params.id);

  const [productList] = useContext(ProductsContext);
  let productDetail = productList.productList.filter(
    (product) => product.id == id
  );

  return (
    <>
      {productDetail.map((product) => (
        <ProductDetail
          key={product.id}
          id={product.id}
          productRating={product.productRating}
          productIngredients={product.productIngredients}
          detailedDescription={product.detailedDescription}
          productImage={product.productImage}
          productDescription={product.productDescription}
          productName={product.productName}
          originalPrice={product.originalPrice}
          sellingPrice={product.sellingPrice}
          isDiscount={product.isDiscount}
          shipping={product.shipping}
          category={product.category}
          brand={product.brand}
          stock={product.stock}
          availability={product.availability}
        />
      ))}
    </>
  );
};

export default Page;
