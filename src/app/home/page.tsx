import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";


const Home = () => {
    return (
        <div className='bg-white dark:bg-slate-800 dark:text-white text-black'>
            <Navbar isSearch={true}/>
            <div id="first-slide" className="relative grid grid-cols-2 items-center bg-center h-screen bg-cover bg-[url('https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/1.jpg?v=1623471846')]">
                <div className="col-span-1 ps-20">
                    <p className="text-xl font-medium tracking-wider mb-6">Quality always comes first</p>
                    <h1 className="text-8xl font-medium uppercase tracking-wide">Fresh Fruit</h1>
                    <h2 className="text-xl font-medium py-3 mb-12">Fruit is a good choice every day for us</h2>
                    <div className="flex justify-start gap-x-5">
                        <button type="button" className="bg-white py-4 px-10 font-medium hover:bg-red-600 hover:text-white">Shop Now</button>
                        <button type="button" className="bg-black text-white py-4 px-10 font-medium hover:bg-red-600">Read More</button>
                    </div>
                </div>
            </div>
            <div id="second-slide" className="hidden relative grid grid-cols-2  items-center bg-center h-screen bg-cover bg-[url('https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/2.jpg?v=1623471983')]">
                <div className="col-span-1 ps-20">
                    <p className="text-xl font-medium tracking-wider mb-6">We Deliver & You Enjoy</p>
                    <h1 className="text-8xl font-medium uppercase tracking-wide">Fruity Flavour</h1>
                    <h2 className="text-xl font-medium py-3 mb-12">Fruit is a good choice every day for us</h2>
                    <div className="flex justify-start gap-x-5">
                        <button type="button" className="bg-white py-4 px-10 font-medium hover:bg-red-600 hover:text-white">Shop Now</button>
                        <button type="button" className="bg-black text-white py-4 px-10 font-medium hover:bg-red-600">Read More</button>
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-24 inset-x-0 text-center">
                <input type="radio" id="slide1" name="slide" className="me-3 slider-button" defaultChecked/>
                <input type="radio" id="slide2" name="slide" className="slider-button"/>
            </div>
            <div className="grid grid-cols-4 text-center py-8 gap-x-20 px-10">
                <div className="col-span-1 grid justify-items-center">
                    <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/1.png?v=1623465035" alt="support" />
                    <h3 className="uppercase font-semibold my-2">24/7 Friendly Support</h3>
                    <p className="text-base font-medium text-gray-600">Our support team always ready for you to 7 days a week</p>
                </div>
                <div className="col-span-1 grid justify-items-center">
                    <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/2.png?v=1623465048" alt="free shipping" />
                    <h3 className="uppercase font-semibold my-2">Free Shipping</h3>
                    <p className="text-base font-medium text-gray-600">Free worldwide shipping on all area orders above $100</p>
                </div>
                <div className="col-span-1 grid justify-items-center">
                    <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/3.png?v=1623465062" alt="easy return" />
                    <h3 className="uppercase font-semibold my-2">7 Days Easy Return</h3>
                    <p className="text-base font-medium text-gray-600">Product any fault within 7 days for an immediate exchange</p>
                </div>
                <div className="col-span-1 grid justify-items-center">
                    <img src="https://fruityflavor-store-demo.myshopify.com/cdn/shop/files/4.png?v=1623465075" alt="quality" />
                    <h3 className="uppercase font-semibold my-2">Quality Guaranteed</h3>
                    <p className="text-base font-medium text-gray-600">If your product aren't perfect, return them for a full refund</p>
                </div>

            </div>
            <Footer />
        </div>
    );
};

export default Home;