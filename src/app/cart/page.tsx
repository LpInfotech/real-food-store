"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ProductsContext } from "../context/GetProducts";

const Cartlist = () => {
  const [items] = useContext(ProductsContext);

  // cart item UI
  function CartItem({
    productImage,
    productName,
    sellingPrice,
    productId,
    stock,
    qty,
  }) {
    const [purchaseQty, setPurchaseQty] = useState(qty);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // add quantity
    function addQty() {
      const url = "http://localhost:5000/cart/" + productId;
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qty: purchaseQty + 1 }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPurchaseQty(purchaseQty + 1);
        });
    }

    // remove quantity
    function removeQty() {
      const url = "http://localhost:5000/cart/" + productId;
      fetch(url, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ qty: purchaseQty - 1 }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setPurchaseQty(purchaseQty - 1);
        });
    }

    // delete modal
    function DeleteModal() {
      function removeFromCart() {
        const url = "http://localhost:5000/cart/" + productId;
        fetch(url, {
          method: "DELETE",
        })
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            items.trigger((prevTrigger) => prevTrigger + 1);
            setIsModalOpen(false);
            console.log(data);
          });
      }

      return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
            isModalOpen ? "" : "hidden"
          }`}
        >
          <div className="bg-white p-8 rounded shadow-md">
            <p className="text-lg font-bold mb-4">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-end">
              <button
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-4"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                onClick={removeFromCart}
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      );
    }

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
          <div className="flex items-center my-4">
            <button onClick={removeQty} disabled={purchaseQty === 0}>
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="w-16 text-center py-1 border mx-2">
              {purchaseQty}
            </span>
            <button onClick={addQty} disabled={purchaseQty === stock}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </td>
        <td className="py-2 px-4">${purchaseQty * sellingPrice}</td>
        <td className="py-2 px-4">
          <button
            className="text-red-500 hover:text-red-700 focus:outline-none"
            onClick={() => setIsModalOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <DeleteModal />
        </td>
      </tr>
    );
  }

  return (
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
            {items.cartList.length > 0 ? (
              items.cartList.map((cartItem) => (
                <CartItem
                  qty={cartItem.qty}
                  key={cartItem.id}
                  stock={cartItem.stock}
                  productImage={cartItem.productImage}
                  productName={cartItem.productName}
                  sellingPrice={cartItem.sellingPrice}
                  productId={cartItem.id}
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
  );
};

export default Cartlist;
