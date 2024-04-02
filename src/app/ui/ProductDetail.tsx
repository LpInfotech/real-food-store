import Image from "next/image";
import {
  faCircleExclamation,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const ProductDetail = ({
  id,
  productImage,
  isDiscount = false,
  productName,
  originalPrice = null,
  sellingPrice,
  productDescription,
  shipping = "Free",
  brand,
  category,
  stock,
  availability,
}) => {
  const [quantityAdded, setQuantityAdded] = useState(1);
  const [totalAmount, setTotalAmount] = useState(null);

  function addItem() {
    setQuantityAdded(quantityAdded + 1);
  }

  function removeItem() {
    setQuantityAdded(quantityAdded - 1);
  }

  function addToCart() {
    setTotalAmount(quantityAdded * sellingPrice);
  }

  return (
    <div className="max-w-screen-lg mx-auto bg-slate-50 shadow-md rounded-lg overflow-hidden px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            className="bg-white p-10"
            priority={true}
            src={productImage}
            alt="product image"
            width={600}
            height={400}
          />
        </div>
        <div>
          <h2 className="text-3xl font-semibold mb-4">{productName}</h2>
          <p className="text-gray-700 mb-4">{productDescription}</p>
          {isDiscount && (
            <span className="text-gray-500 line-through text-xl font-semibold me-2">
              ${originalPrice}
            </span>
          )}
          <span className="text-gray-800 text-2xl font-semibold">
            ${sellingPrice}
          </span>
          <div className="flex items-center my-4">
            <button onClick={removeItem} disabled={quantityAdded === 0 && true}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="w-16 text-center py-1 border mx-2">
              {quantityAdded}
            </span>
            <button onClick={addItem} disabled={quantityAdded === stock}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md"
            onClick={addToCart}
          >
            Add to Cart
          </button>
          {totalAmount && (
            <div className="bg-green-700 px-5 py-3 text-white rounded-md shadow-md my-10">
              <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
              <span className="text-lg font-light">
                Total amount to be paid is{" "}
                <span className="font-semibold">${totalAmount}</span>.
              </span>
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-8">
        <h3 className="text-xl font-semibold mb-4">Product Details</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>
            <span className="font-semibold">Brand:</span> {brand}
          </li>
          <li>
            <span className="font-semibold">Category:</span> {category}
          </li>
          <li>
            <span className="font-semibold">Availability:</span>{" "}
            {availability ? "Available" : "Not available"}
          </li>
          <li>
            <span className="font-semibold">SKU:</span> {id}
          </li>
          <li>
            <span className="font-semibold">Shipping:</span> {shipping}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetail;
