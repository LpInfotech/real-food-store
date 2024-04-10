"use client";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ConfirmDeleteModal = ({ isOpen, onClose, productId }) => {
  const { removeFromCart } = useContext(CartContext);
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded shadow-md">
        <p className="text-lg font-bold mb-4">
          Are you sure you want to delete this item?
        </p>
        <div className="flex justify-end">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mr-4"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => removeFromCart({ productId })}
          >
            Confirm Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
