import Image from "next/image";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
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
  productRating,
  productIngredients,
  detailedDescription,
  category,
  stock,
  availability,
}) => {
  const [purchaseQuantity, setPurchaseQuantity] = useState(1);
  return (
    <div className="max-w-screen-lg mx-auto bg-slate-50 shadow-md rounded-lg overflow-hidden px-4 py-8 cursor-pointer">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <Image
            className="p-5 bg-white"
            priority={true}
            src={productImage}
            alt="product image"
            width={600}
            height={400}
          />
        </div>
        <div>
          <p className="text-xs mb-2 text-orange-400">{category}</p>
          <h2 className="text-2xl font-semibold mb-4">{productName}</h2>
          <p className="text-xs mb-3 text-lime-500 font-medium">In stock, {stock} Left only !!</p>
          <p className="mt-3 mb-5">{productRating}</p>
          <h3 className="uppercase text-sm font-medium mt-3 text-gray-700">Price</h3>
          <span className="text-lime-500 text-2xl font-semibold me-2">
            ${sellingPrice}
          </span>
          {isDiscount && (
            <span className="text-gray-400 line-through text-2xl ">
              ${originalPrice}
            </span>
          )}
          <p className="text-xs text-gray-700 mb-10">(inclusive of all taxes)</p>
          <h3 className="uppercase text-sm font-medium text-gray-700 mb-2">Key Information</h3>
          <p className="text-gray-700 mb-10 text-sm">{productDescription}</p>

          {/* <h3 className="uppercase text-sm font-medium text-gray-700 mb-2">Quantity</h3>
          <div className="flex items-center mb-4 border w-fit border-lime-500">
            <button className="px-3 bg-lime-500 py-1 text-white"
              onClick={() => setPurchaseQuantity(purchaseQuantity - 1)}
              disabled={purchaseQuantity === 0 && true}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="w-16 text-center  border-l border-r">
              {purchaseQuantity}
            </span>
            <button className="px-3 py-1 bg-lime-500 text-white"
              onClick={() => setPurchaseQuantity(purchaseQuantity + 1)}
              disabled={purchaseQuantity === stock}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div> */}

          {/* <div>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md me-2"
              onClick={() => setTotalAmount(purchaseQuantity * sellingPrice)}
            >
              Add to Cart
            </button>
            <button className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-md shadow-md">
              Buy Now
            </button>
          </div>
          {totalAmount > 0 && (
            <div className="bg-green-700 px-5 py-3 text-white rounded-md shadow-md my-10">
              <FontAwesomeIcon icon={faCircleExclamation} className="me-2" />
              <span className="text-lg font-light">
                Total amount to be paid is{" "}
                <span className="font-semibold">${totalAmount}</span>.
              </span>
            </div>
          )} */}
        </div>
      </div>
      <div className="border-t border-gray-200 mt-8 pt-8 mb-4">
        <div className="grid grid-cols-3 items-center">
          <div className="col-span-2 ms-2 me-4">
            <h3 className="text-xl font-semibold mb-4">Product Details</h3>
            <p className="text-gray-700 mb-10 text-sm">{detailedDescription}</p>
          </div>
          <div className="col-span-1 bg-gray-200 ps-4 pe-2 py-5 rounded-lg shadow me-2 h-fit">
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <p className="text-gray-700 text-sm">{productIngredients}</p>
          </div>
        </div>
      </div>
      <hr />
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 ms-2 me-4 mt-10">
        <li>
          <span className="font-semibold">Brand: </span>
          {brand}
        </li>
        <li>
          <span className="font-semibold">Category: </span>
          {category}
        </li>
        <li>
          <span className="font-semibold">Availability: </span>
          {availability ? "Available" : "Not available"}
        </li>
        <li>
          <span className="font-semibold">SKU: </span>
          {id}
        </li>
        <li>
          <span className="font-semibold">Shipping: </span>
          {shipping}
        </li>
      </ul>
    </div>
  );
};

export default ProductDetail;
