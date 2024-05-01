"use client";
import Link from "next/link";

const Register = () => {
    return (
        <div>
            <div className="w-3/4 m-auto h-screen flex flex-col justify-center">
                <div className="md:grid md:grid-cols-2 shadow-2xl ">
                    <div className="col-span-1">
                        <img src="https://images.unsplash.com/photo-1628102490959-a5b3c905fb9b?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="h-full"/>
                    </div>
                    <div className="bg-white col-span-1 pt-5">
                        <div className="flex justify-center">
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
                            <h1 className="mt-3 text-2xl font-medium mb-10">Create an account</h1>
                            <div className="mb-3 w-3/4 m-auto">
                                <label htmlFor="username" className="float-left me-5 mb-2 text-sm">Username</label><br />
                                <input type="text" id="username" className="p-3 w-full bg-gray-100" placeholder="Username" />
                                <span id="emailMsg"></span>
                            </div>
                            <div className="mb-3 w-3/4 m-auto">
                                <label htmlFor="email" className="float-left me-5 mb-2 text-sm">Email Address</label><br />
                                <input type="email" id="email" className="p-3 w-full bg-gray-100" placeholder="Email Address" />
                                <span id="emailMsg"></span>
                            </div>
                            <div className="mb-3 w-3/4 m-auto">
                            <label htmlFor="password" className="float-left me-5 mb-2 text-sm">Password</label><br />
                            <input type="password" id="password" className="p-3 w-full bg-gray-100" placeholder="Password" />
                            <span id="passMsg"></span>
                            </div>
                            <div className="w-3/4 m-auto mb-7">
                                <div className="text-start">
                                    <input type="checkbox" id="terms" name="terms" />
                                    <label htmlFor="terms" className="ms-2 text-sm">I agree to terms and conditions</label>
                                </div>
                            </div>
                            <button className="my-5 py-3 bg-black w-1/3 font-medium text-white hover:bg-lime-500" type="submit">Register</button>
                            <div>
                                Already have an account? <a href="/login"><span className="hover:text-lime-500 text-lime-700 font-bold">Login Now!</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;