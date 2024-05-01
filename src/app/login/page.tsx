"use client";
import Link from "next/link";

const Login = () => {
    return (
        <div>
            <div className="w-3/4 m-auto h-screen flex flex-col justify-center">
                <div className="md:grid md:grid-cols-2 shadow-2xl ">
                    <div className="col-span-1">
                        <img src="https://grocia-store-demo.myshopify.com/cdn/shop/files/instagram4.jpg?v=14653540887392446767" alt="" />
                    </div>
                    <div className="bg-white col-span-1">
                        <div className="flex justify-center md:my-10">
                            <Link href="/" className="dark:hidden md:flex items-end">
                                <img
                                    src="https://brainfoodstudio.com/wp-content/uploads/2018/07/brain-food-studio-logo-1200px.png"
                                    alt="brain-food-logo"
                                    className="md:w-36 w-24" />
                            </Link>
                            <Link href="/" className="hidden dark:flex items-end">
                                <img
                                    src="https://brainfoodstudio.com/wp-content/uploads/2018/07/brain-food-studio-logo-reverse-1200px.png"
                                    alt="brain-food-logo"
                                    className="md:w-36 w-24" />
                            </Link>
                        </div>
                        <div className="text-center">
                            <h1 className="mt-5 text-2xl font-medium">Welcome Back!</h1>
                            <h6 className="mb-4">Login to your account in seconds</h6>
                            <input type="email" id="email" className="mb-3 p-3 w-3/4 bg-gray-100" placeholder="Your Email Address" />
                            <span id="emailMsg"></span>
                            <input type="password" id="password" className="mb-3 p-3 w-3/4 bg-gray-100" placeholder="Password" />
                            <span id="passMsg"></span>
                            <div className="w-3/4 m-auto grid grid-cols-2">
                                <div className="text-start col-span-1">
                                    <input type="checkbox" id="remember" name="remember" value="Remember Me" />
                                    <label htmlFor="remember" className="ms-1">Remember Me</label>
                                </div>
                                <div className="text-end col-span-1">
                                    <a href="#" className="">Forgot Password?</a>
                                </div>
                            </div>
                            <button className="my-10 py-3 border border-black hover:bg-black w-1/3 font-medium hover:text-white" type="submit">Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;