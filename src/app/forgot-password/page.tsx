"use client";
import Link from "next/link";
import { useState } from "react";

const ForgotPassword = () => {
    const [userEmail, setUserEmail] = useState("");

    return (
        <div className="h-full flex">
            <div className="sm:w-3/4 m-auto w-11/12 xl:w-2/3">
                <div className="lg:grid lg:grid-cols-2 shadow-lg">
                    <div className="col-span-1 hidden lg:block bg-cover bg-[url(https://media.istockphoto.com/id/77932955/photo/man-grocery-shopping.jpg?s=1024x1024&w=is&k=20&c=KuYjwmmOuL46IIKz59jCnbWkvsMBBQzgyMgoJTl-O7Y=)]"></div>
                    <div className="bg-white col-span-1 dark:bg-slate-800 dark:text-white">
                        <form className="py-10 px-5 md:px-10 text-center">
                            <div className="flex justify-center">
                                <Link href="/" className="dark:hidden">
                                    <img
                                        src="https://i.postimg.cc/5t1DXWdp/image-4-removebg-preview.png"
                                        alt="lp-grocery-logo"
                                        className="w-36 md:w-52"
                                    />
                                </Link>
                                <Link href="/" className="hidden dark:block">
                                    <img
                                        src="https://i.postimg.cc/SxxKrhq1/image-4-removebg-preview.png"
                                        alt="lp-grocery-logo"
                                        className="w-36 md:w-52"
                                    />
                                </Link>
                            </div>
                            <h1 className="mt-10 text-2xl font-medium mb-2">Forgot your Password?</h1>
                            <p className="my-5 text-justify">Enter your Email and we'll send you a link to reset your password.</p>
                            <div className="grid gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="float-left text-sm lg:text-xs xl:text-sm">Email Address</label>
                                    <input type="email" id="email" className="p-3 w-full bg-gray-100" placeholder="Email Address" onChange={(event) => setUserEmail(event.target.value)} />
                                    <span id="emailMsg"></span>
                                </div>
                                <button className="py-3 bg-black w-1/3 justify-self-center font-medium text-white disabled:bg-gray-500 disabled:text-white disabled:border-gray-500"
                                    type="submit"
                                    disabled={userEmail ? false : true}>Submit
                                </button>
                                <div>
                                    <a href="/" className="hover:text-lime-500 text-lime-700 font-bold">
                                        Back to Login
                                    </a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ForgotPassword;
