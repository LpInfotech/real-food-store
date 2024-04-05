"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { use, useState } from "react";

const Product = ({
  productId,
  productImage,
  isDiscount = false,
  productName,
  originalPrice = null,
  sellingPrice,
}) => {
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  const [totalAmount, setTotalAmount] = useState(null);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:scale-105 transition hover:shadow-md">
      <Link href={`/products/product/${productId}`}>
        <Image
          className="p-4 w-full border-b"
          priority={true}
          src={productImage}
          alt="product image"
          width={300}
          height={300}
        />
      </Link>
      <div className="p-4">
        <Link href={`/products/product/${productId}`}>
          <h5 className="text-base md:text-lg font-semibold tracking-tight text-gray-900 mb-2">
            {productName}
          </h5>
        </Link>
        <div className="mb-2">
          <span className="font-bold text-sm md:text-base text-gray-900 me-2">
            ${sellingPrice}
          </span>
          {isDiscount && (
            <span className="text-sm md:text-base text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>
        <button
          className="inline-block text-blue-700 border p-2 rounded-lg shadow mb-2"
          onClick={() => setTotalAmount(purchaseQuantity * sellingPrice)}
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <span> {totalAmount > 0 ? "Go" : "Add"} to cart</span>
        </button>
        {totalAmount > 0 && (
          <div className="text-sm font-medium text-green-500">
            1 item worth ${totalAmount} is added to the cart.
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
