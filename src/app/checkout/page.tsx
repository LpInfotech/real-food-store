"use client";
import { useContext, useState } from "react";
import Image from "next/image";
import { faBuildingColumns, faCreditCard, faMinus, faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../ui/Navbar";
import Footer from "../ui/Footer";
import { ProductsContext } from "../context/GetProducts";
import { faGooglePay } from "@fortawesome/free-brands-svg-icons";
import Cartlist from "../cart/page";

const Checkout = () => {
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
          });
      }

      return (
        <div
          className={`fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center ${
            isModalOpen ? "" : "hidden"
          }`}
        >
          <div className="bg-white p-8 rounded-md shadow-md">
            <button type="button" className="text-gray-500 float-end" onClick={() => setIsModalOpen(false)}><FontAwesomeIcon icon={faXmark} size="xl" /></button>
            <div className="flex justify-center border-4 border-red-600 border-spacing-2 w-fit m-auto px-4 py-3 rounded-full text-2xl my-5 text-red-600"><FontAwesomeIcon icon={faXmark} size="xl" /></div>
            <p className="text-3xl mb-10 px-8 text-center">
              Are you sure?
            </p>
            <p className="capitalize mb-5 text-base px-5">do you really want to delete this item?</p>
            <div className="flex justify-end px-8 mb-5">
              <button
                className="bg-white border hover:bg-gray-400 shadow-md text-gray-800 font-bold py-2 px-4 rounded mr-4"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 shadow-md text-white font-bold py-2 px-4 rounded"
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
      <tr className="border-b odd:bg-gray-100 even:bg-white">
        <td className="py-2 md:px-4 px-2">
          <div className="flex flex-col md:flex-row items-center md:ps-12 text-center">
            <Image
              className="h-12 w-12 object-cover rounded"
              src={productImage}
              width={600}
              height={400}
              alt="product image"
            />
            <span className="font-medium md:ml-4">{productName}</span>
          </div>
        </td>
        <td className="py-2 md:px-4 px-2">
          <div className={`flex items-center my-4 w-fit py-2 rounded-md ${purchaseQty === 0 ? 'bg-white' : 'bg-lime-600'} border ${purchaseQty === 0 ? 'text-black' : 'text-white'}`}>
            <button onClick={removeQty} disabled={purchaseQty === 0} className="md:w-10 w-5">
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <span className="md:w-10 text-center w-5">
              {purchaseQty}
            </span>
            <button onClick={addQty} disabled={purchaseQty === stock} className="md:w-10 w-5">
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </td>
        <td className="py-2 md:px-4 px-2">
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
            <section className="bg-[url(https://images.pexels.com/photos/219794/pexels-photo-219794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-black bg-blend-overlay bg-opacity-50">
                <Navbar />
                <div className="flex justify-end w-11/12 mx-auto items-center my-10">
                    <a href="/cart" target="_blank"><button type="button" className="hover:bg-lime-600 hover:text-white text-lime-600 border bg-white border-lime-600 font-bold py-2 px-4 rounded">Edit Cart</button></a>
                </div>
                <div className="my-6 w-11/12 mx-auto grid md:grid-cols-3">
                    <div className="col-span-2 space-y-10">
                        <form action="" className="bg-white rounded-lg shadow-md py-10 px-5 md:px-10">
                            <h3 className="font-medium text-gray-500 py-3">Step 1/3</h3>
                            <h1 className="uppercase text-xl md:text-2xl font-medium pb-5 text-lime-600">My Shipping Address</h1>
                            <div className="gap-y-5 grid">
                                <div className="md:grid grid-cols-2 gap-5 space-y-5 md:space-y-0">
                                    <h4 className="text-xl font-bold col-span-2 text-gray-500">Contact</h4>
                                    <div className="space-y-2">
                                        <label htmlFor="firstname" className="text-sm lg:text-xs xl:text-sm font-medium">First Name</label>
                                        <input type="text" id="firstname" placeholder="Enter your first name" className="p-3 col-span-2 w-full bg-gray-100" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastname" className="text-sm lg:text-xs xl:text-sm font-medium">Last Name</label>
                                        <input type="text" id="lastname" placeholder="Enter your last name" className="p-3 col-span-2 w-full bg-gray-100" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="phone" className="text-sm lg:text-xs xl:text-sm font-medium">Phone</label>
                                        <input type="tel" id="phone" placeholder="Enter your phone number" className="p-3 col-span-2 w-full bg-gray-100" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm lg:text-xs xl:text-sm font-medium">Email Address</label>
                                        <input type="email" id="email" placeholder="Enter your email address" className="p-3 col-span-2 w-full bg-gray-100" />
                                    </div>
                                </div>
                                <div className="md:grid grid-cols-2 gap-5 mt-5 space-y-5 md:space-y-0">
                                    <h4 className="text-xl font-bold col-span-2 text-gray-500">Address</h4>
                                    <div className="space-y-2">
                                        <label htmlFor="country" className="text-sm lg:text-xs xl:text-sm font-medium">Country</label>
                                        <select id="country" name="country" className="p-3 col-span-2 w-full bg-gray-100">
                                            <option value="india">India</option>
                                            <option value="uk">United Kingdom</option>
                                            <option value="us">United States</option>
                                            <option value="canada">Canada</option>
                                            <option value="australia">Australia</option>
                                            <option value="nz">New Zealand</option>
                                            <option value="italy">Italy</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="state" className="text-sm lg:text-xs xl:text-sm font-medium">State</label>
                                        <input type="text" id="state" placeholder="Enter state" className="p-3 col-span-2 w-full bg-gray-100" />
                                    </div>
                                    <div className="space-y-2 col-span-2">
                                        <label htmlFor="address" className="text-sm lg:text-xs xl:text-sm font-medium">Full Address</label>
                                        <input type="text" id="address" placeholder="Enter your full address" className="p-3 col-span-2 w-full bg-gray-100" />
                                    </div>
                                    <div>
                                        <input type="checkbox" className="me-2" id="setAsDefault" name="setAsDefault" value="setAsDefault" />
                                        <label htmlFor="setAsDefault"> Set as default</label>
                                    </div>
                                </div>
                                <div className="text-center mt-5">
                                    <button className="bg-lime-600 w-fit hover:bg-lime-700 text-white font-bold py-3 px-5 rounded text-xl">
                                        Save Address
                                    </button>
                                </div>
                            </div>
                        </form>
                        <form action="" className="bg-white rounded-lg shadow-md py-10 px-5 md:px-10">
                            <h3 className="font-medium text-gray-500 py-3">Step 2/3</h3>
                            <h1 className="uppercase text-xl md:text-2xl font-medium pb-5 text-lime-600">Payment Info</h1>
                            <div className="grid">
                                <div className="grid grid-cols-3 space-x-5 text-2xl *:py-8 *:space-y-3 text-gray-700 *:bg-gray-100 *:rounded-lg *:border-2 *:border-gray-100 font-medium">
                                    <button type="button" className="hover:border-lime-600 hover:text-lime-600">
                                        <FontAwesomeIcon icon={faCreditCard} />
                                        <p>Card</p>
                                    </button>
                                    <button type="button" className="hover:border-lime-600 hover:text-lime-600 group">
                                        <FontAwesomeIcon icon={faGooglePay} className="border border-black rounded-full px-5 size-10 group-hover:border-lime-600" />
                                        <p>Google Pay</p>
                                    </button>
                                    <button type="button" className="hover:border-lime-600 hover:text-lime-600">
                                        <FontAwesomeIcon icon={faBuildingColumns} />
                                        <p>Bank</p>
                                    </button>
                                </div>

                                <div className="text-center mt-5">
                                    <button className="bg-lime-600 w-fit hover:bg-lime-700 text-white font-bold py-3 px-5 rounded text-xl">
                                        Save Address
                                    </button>
                                </div>
                            </div>
                        </form>
                        <form action="" className="bg-white rounded-lg shadow-md py-10 px-5 md:px-10">
                            <h3 className="font-medium text-gray-500 py-3">Step 3/3</h3>
                            <h1 className="uppercase text-xl md:text-2xl font-medium pb-5 text-lime-600">Order Review</h1>
                            <div className="bg-white shadow-md my-6 md:w-11/12 mx-auto rounded-md">
                                <table className="w-full table-auto">
                                    <thead className="bg-lime-600 h-16 text-white">
                                        <tr className="border-b text-left md:text-xl *:py-5">
                                            <th className="md:ps-16 ps-4">Product</th>
                                            {/* <th className="md:px-4">Price</th> */}
                                            <th className="md:px-4">Quantity</th>
                                            {/* <th className="md:px-4">Total</th> */}
                                            <th className="md:px-4"></th>
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
                                                <td className="ps-4 py-8">No products added to the cart!</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    </div>

                    <div className="mx-auto md:w-4/5 mt-10 md:mt-0">
                        <div className="bg-white px-5 md:px-10 pb-10 rounded-lg">
                            <h2 className="uppercase text-2xl font-medium pt-10 pb-5 text-lime-600">Order Summary</h2>
                            <p className="pb-5">The total cost consists of the tax, Subtotal and the Shipping Charges</p>
                            <hr className="border-gray-500 pt-5" />
                            <div className="space-y-3">
                                <p className="flex justify-between">
                                    <span>Subtotal</span>
                                    <span>$222</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Taxes</span>
                                    <span>$27</span>
                                </p>
                                <p className="flex justify-between">
                                    <span>Shipping Charges</span>
                                    <span>$28</span>
                                </p>
                                <hr className="border-gray-500" />
                                <p className="flex justify-between text-2xl">
                                    <span className="text-lime-600">Total</span>
                                    <span>$277</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between mt-8 w-11/12 mx-auto">
                    <a href="/products" target="_blank" className="text-lime-600 hover:underline bg-white font-bold py-2 px-4 rounded">
                        Continue Shopping
                    </a>
                    <button className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded">
                        Place Order
                    </button>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Checkout;
