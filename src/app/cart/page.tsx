"use client";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import Image from "next/image";

const Cartlist = () => {
  const { items, removeFromCart } = useContext(CartContext);

  function CartItem({ productImage, productName, sellingPrice, productId }) {
    return (
      <tr className="border-b">
        <td className="py-2 px-4">
          <div className="flex items-center">
            <Image
              className="h-12 w-12 object-cover rounded"
              src={productImage}
              width={600}
              height={400}
              alt="product image"
            />
            <span className="font-medium ml-4">{productName}</span>
          </div>
        </td>
        <td className="py-2 px-4">${sellingPrice}</td>
        <td className="py-2 px-4">
          <input type="number" className="border rounded-md w-16 text-center" />
        </td>
        <td className="py-2 px-4">$19.99</td>
        <td className="py-2 px-4">
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => removeFromCart({ productId })}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
      </tr>
    );
  }

  return (
    <>
      <>
        <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
        <div className="bg-white shadow-md rounded my-6">
          <table className="w-full table-auto">
            <thead>
              <tr className="border-b text-left">
                <th className="py-2 px-4">Product</th>
                <th className="py-2 px-4">Price</th>
                <th className="py-2 px-4">Quantity</th>
                <th className="py-2 px-4">Total</th>
                <th className="py-2 px-4"></th>
              </tr>
            </thead>
            <tbody>
              {items.length > 0 ? (
                items.map((cartItem) => (
                  <CartItem
                    key={cartItem.productId}
                    productImage={cartItem.productImage}
                    productName={cartItem.productName}
                    sellingPrice={cartItem.sellingPrice}
                    productId={cartItem.productId}
                  />
                ))
              ) : (
                <tr>
                  <td>No products added to the cart!</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between mt-8">
          <a href="#" className="text-blue-500 hover:underline">
            Continue Shopping
          </a>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Checkout
          </button>
        </div>
      </>
    </>
  );
};

export default Cartlist;
