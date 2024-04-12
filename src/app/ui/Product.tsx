"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/cartContext";

const Product = ({
  productId,
  productImage,
  productBrief,
  productRating,
  isDiscount = false,
  productName,
  originalPrice = null,
  sellingPrice,
  stock,
}) => {
  const { items, addToCart } = useContext(CartContext);
  const [exists, setExists] = useState(false);

  useEffect(() => {
    const inCart = items.find((item) => item.productId === productId);

    if (inCart) {
      setExists(true);
    } else {
      setExists(false);
    }
  }, [items, productId]);

  let rating = [];
  for (var i = 1; i <= productRating; i++) {
    rating.push(<span>⭐️</span>);
  }

  return (
    <div className="w-full max-w-sm bg-white dark:bg-slate-700 dark:text-white border border-gray-200 dark:border-slate-600 rounded-lg shadow hover:scale-105 transition hover:shadow-md group">
      <Link href={`/products/product/${productId}`}>
        <Image
          className="p-4 w-full bg-slate-300 dark:bg-slate-800"
          priority={true}
          src={productImage}
          alt="product image"
          width={300}
          height={300}
        />
      </Link>
      <div className="p-4">
        <Link href={`/products/product/${productId}`}>
          <h5 className="text-base md:text-lg font-semibold tracking-tight dark:text-white text-gray-900 mb-2 group-hover:text-lime-500">
            {productName}
          </h5>
        </Link>
        <div className="text-xs mb-2 group-hover:text-lime-500">
          {productBrief}
        </div>
        <div className="mb-2">
          <span className="font-bold text-sm md:text-base dark:text-white text-gray-900 me-2 group-hover:text-lime-500">
            ${sellingPrice}
          </span>
          {isDiscount && (
            <span className="text-sm md:text-base dark:text-slate-200 text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        <div className="mb-2">{rating}</div>
        {exists ? (
          <Link
            className="inline-block text-white bg-lime-500 border py-2 rounded-full px-3 shadow text-sm"
            href="/cart"
          >
            <FontAwesomeIcon icon={faCartShopping} className="me-2 text-sm" />
            Go to Cart
          </Link>
        ) : (
          <Link
            className="inline-block border dark:border-slate-600 dark:bg-slate-900 py-2 rounded-full px-3 shadow text-sm hover:bg-lime-500 hover:text-white"
            onClick={() =>
              addToCart({
                productId,
                productImage,
                isDiscount,
                productName,
                originalPrice,
                sellingPrice,
                stock,
              })
            }
            href={""}
          >
            <FontAwesomeIcon icon={faCartShopping} className="me-2 text-sm" />
            Add to Cart
          </Link>
        )}
      </div>
    </div>
  );
};

export default Product;
