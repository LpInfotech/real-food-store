"use client";
import { useContext } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import Product from "../ui/Product";
import { ProductsContext } from "@/app/context/GetProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset, faTruckFast, faRightLeft, faRankingStar } from "@fortawesome/free-solid-svg-icons";


const Landing = () => {
    const [productList] = useContext(ProductsContext);
    let bestSellerList = productList.productList.filter(
        (item) => item.productRating == 5
    );
    return (
        <div className='bg-white dark:bg-gray-950  text-black'>
            <Navbar />
            {/* hero section */}
            <div className="relative md:h-[80vh] grid sm:grid-cols-2 items-center bg-center bg-cover bg-[url('https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/1.jpg?v=1623471846')]">
                <div className="col-span-1 sm:ps-20">
                    <div className="px-3 sm:px-0 text-center sm:text-start">
                    <p className="text-xl font-medium tracking-wider mb-6 mt-5">Quality always comes first</p>
                    <h1 className="sm:text-8xl text-5xl font-medium uppercase tracking-wide">Fresh Fruit</h1>
                    <h2 className="text-xl font-medium py-3 sm:mb-12 mb-5">Fruit is a good choice every day for us</h2>
                    </div>
                    <div className="grid sm:grid-cols-2 md:flex justify-center md:justify-start gap-x-5 gap-y-3">
                        <a href="#service">
                            <button type="button" className="bg-black text-white py-4 px-10 font-medium hover:bg-lime-600">Read More</button>
                            </a>
                        <a href="/products" target="_blank">
                            <button type="button" className="bg-white py-4 px-10 mb-5 font-medium hover:bg-lime-600 hover:text-white">Shop Now</button>
                            </a>
                    </div>
                </div>
            </div>
            {/* /hero section */}
            {/* best sellers section */}
            <div className="my-20 m-auto w-11/12">
                <h2 className="sm:text-5xl text-3xl my-5 text-center dark:text-white">Our Best Sellers</h2>
                <h4 className="font-medium text-gray-500 text-lg text-center dark:text-white">Best Seller Product This week</h4>
                <div className="mt-8 sm:mx-10 ">
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 justify-center">
                        {bestSellerList.slice(0, 4).map((product) => (
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
                        ))}
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <a href="/products" target="_blank"><button type="button" className="bg-transparent dark:bg-white dark:text-black border border-black sm:py-4 py-2 sm:px-10 px-5 font-medium hover:text-white hover:bg-black dark:hover:bg-lime-500">View All Products</button>
                    </a>
                </div>
            </div>
            {/* /best sellers section */}
            {/* shop now section */}
            <div className="bg-gray-100 grid lg:grid-cols-2 dark:text-white dark:bg-gray-800">
                <div className="col-span-1 h-full flex flex-col items-center justify-center py-5">
                    <h2 className="sm:text-3xl text-center">Get Up To 15% Off <br /> <span className="sm:text-5xl text-2xl tracking-wider font-bold">LP Grocery Store</span></h2>
                    <h4 className="text-lg sm:mb-5 my-2 font-medium text-gray-500">Highest Quality</h4>
                    <a href="/products" target="_blank"><button type="button" className="bg-transparent dark:bg-white dark:text-black border border-black sm:py-4 py-2 sm:px-10 px-5 font-medium hover:text-white hover:bg-black dark:hover:bg-lime-500">Shop Now</button>
                    </a>
                </div>
                <div className="col-span-1">
                    <img src="https://cdn.pixabay.com/photo/2023/12/29/10/39/woman-8475957_1280.jpg" alt="fruits banner" />
                </div>
            </div>
            {/* /shop now section */}
            {/* why choose section */}
            <div className="text-center py-8 sm:px-10 px-5 w-11/12 m-auto sm:my-20 my-5" id="service">
                <h2 className="sm:text-5xl text-3xl sm:mb-16 mb-8 dark:text-white">Why Choose Us?</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-y-10 dark:text-white md:divide-x sm:*:px-8">
                    <div className="col-span-1 grid justify-items-center">
                        <FontAwesomeIcon icon={faHeadset} size="2xl" />
                        <h3 className="uppercase font-semibold my-2">24/7 Friendly Support</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">Our support team always ready for you to 7 days a week</p>
                    </div>
                    <div className="col-span-1 grid justify-items-center">
                        <FontAwesomeIcon icon={faTruckFast} size="2xl" />
                        <h3 className="uppercase font-semibold my-2">Free Shipping</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">Free worldwide shipping on all area orders above $100</p>
                    </div>
                    <div className="col-span-1 grid justify-items-center">
                        <FontAwesomeIcon icon={faRightLeft} size="2xl" />
                        <h3 className="uppercase font-semibold my-2">7 Days Easy Return</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">Product any fault within 7 days for an immediate exchange</p>
                    </div>
                    <div className="col-span-1 grid justify-items-center">
                        <FontAwesomeIcon icon={faRankingStar} size="2xl" />
                        <h3 className="uppercase font-semibold my-2">Quality Guaranteed</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">If your product aren't perfect, return them for a full refund</p>
                    </div>
                </div>
            </div>
            {/* /why choose section */}
            <Footer />
        </div>
    );
};

export default Landing;