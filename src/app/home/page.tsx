"use client";
import { useContext } from "react";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import Product from "../ui/Product";
import { ProductsContext } from "@/app/context/GetProducts";

const Home = (data) => {
    const [productList] = useContext(ProductsContext);
    function NoDataFound() {
        return (
            <h2 className="text-xl font-semibold dark:text-white">
                No Products found!
            </h2>
        );
    }
    return (
        <div className='bg-white dark:bg-gray-950  text-black scroll-smooth'>
            <Navbar isSearch={true} />
            {/* hero section */}
            <div id="first-slide" className="relative grid grid-cols-2 items-center bg-center h-screen bg-cover bg-[url('https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/1.jpg?v=1623471846')] dark:bg-[url(https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/2.jpg?v=1623471983)]">
                <div className="col-span-1 ps-20">
                    <p className="text-xl font-medium tracking-wider mb-6">Quality always comes first</p>
                    <h1 className="text-8xl font-medium uppercase tracking-wide">Fresh Fruit</h1>
                    <h2 className="text-xl font-medium py-3 mb-12">Fruit is a good choice every day for us</h2>
                    <div className="flex justify-start gap-x-5">
                        <a href="#service" className="transition duration-300 ease-in-out"><button type="button" className="bg-black text-white py-4 px-10 font-medium hover:bg-red-600">Read More</button></a>
                        <a href="/" target="_blank"><button type="button" className="bg-white py-4 px-10 font-medium hover:bg-red-600 hover:text-white">Shop Now</button></a>
                    </div>
                </div>
            </div>
            {/* /hero section */}

            {/* slider button */}
            {/* <div className="absolute -bottom-24 inset-x-0 text-center">
                <input type="radio" id="slide1" name="slide" className="me-3 slider-button" defaultChecked />
                <input type="radio" id="slide2" name="slide" className="slider-button" />
            </div> */}

            {/* why choose section */}
            <div className="text-center py-8 gap-x-20 px-10" id="service">
                <h2 className="text-5xl mt-5 mb-16 dark:text-white">Why Choose Us?</h2>
                <div className="grid grid-cols-4 dark:text-white">
                    <div className="col-span-1 grid justify-items-center">
                        <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/1.png?v=1623465035" alt="support" />
                        <h3 className="uppercase font-semibold my-2">24/7 Friendly Support</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">Our support team always ready for you to 7 days a week</p>
                    </div>
                    <div className="col-span-1 grid justify-items-center">
                        <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/2.png?v=1623465048" alt="free shipping" />
                        <h3 className="uppercase font-semibold my-2">Free Shipping</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">Free worldwide shipping on all area orders above $100</p>
                    </div>
                    <div className="col-span-1 grid justify-items-center">
                        <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/3.png?v=1623465062" alt="easy return" />
                        <h3 className="uppercase font-semibold my-2">7 Days Easy Return</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">Product any fault within 7 days for an immediate exchange</p>
                    </div>
                    <div className="col-span-1 grid justify-items-center">
                        <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/4.png?v=1623465075" alt="quality" />
                        <h3 className="uppercase font-semibold my-2">Quality Guaranteed</h3>
                        <p className="text-base font-medium text-gray-600 dark:text-white">If your product aren't perfect, return them for a full refund</p>
                    </div>
                </div>
            </div>
            {/* /why choose section */}
            {/* best sellers section */}
            <div className="my-20">
                <h2 className="text-5xl my-5 text-center dark:text-white">Our Best Sellers</h2>
                <h4 className="font-medium text-gray-500 text-lg text-center dark:text-white">Best Seller Product This week</h4>
                <div className="mt-8 mx-10">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {data.filterData === 0 && data.searchItem ? (
                            <NoDataFound />
                        ) : (
                            (data.filterData > 0 && data.searchItem
                                ? data.filterData
                                : productList.cartList
                            ).map((product) => (
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
                            ))
                        )}
                    </div>
                </div>
            </div>
            {/* /best sellers section */}
            {/* shop now section */}
            <div className="bg-gray-100 grid grid-cols-2 dark:text-white dark:bg-gray-950">
                <div className="col-span-1 h-full flex flex-col items-center justify-center">
                    <h2 className="text-3xl text-center">Get Up To 15% Off <br /> <span className="text-5xl tracking-wider font-bold">Brain Food Studio</span></h2>
                    <h4 className="text-lg my-5 font-medium text-gray-500">Highest Quality</h4>
                    <a href="/" target="_blank"><button type="button" className="bg-transparent dark:bg-white dark:text-black border border-black py-4 px-10 font-medium hover:text-white hover:bg-black dark:hover:bg-lime-500">Shop Now</button>
                    </a>
                </div>
                <div className="col-span-1">
                    <img src="https://grocia-store-demo.myshopify.com/cdn/shop/files/bannerV1-img.jpg?v=1648197893" alt="grocery banner" />
                </div>


            </div>
            {/* /shop now section */}
            <Footer />
        </div>
    );
};

export default Home;