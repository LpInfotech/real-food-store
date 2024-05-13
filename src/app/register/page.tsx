"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/GetProducts";

const Register = () => {
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userPassword, setUserPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");
    const [userList] = useContext(ProductsContext);
    const router = useRouter();

    const userInfo = {
        name: userName,
        email: userEmail.toLowerCase(),
        phone: userPhone,
        password: userPassword,
        confirmPassword: userConfirmPassword,
    };

    //   get values on form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        const existingUser = userList.userList.find(
            (item) => item.email === userEmail
        );

        if (userPassword === userConfirmPassword) {
            if (existingUser === undefined) {
                // add items to the api
                fetch("http://localhost:5000/user", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userInfo),
                })
                    .then((res) => {
                        return res.json();
                    })
                    .then((data) => {
                        alert("Registered successfully!");
                        userList.trigger((prevTrigger) => prevTrigger + 1);
                        router.push("/login");
                    });
            } else {
                alert("This email address already exists.");
            }
        } else {
            alert("Passwords doesn't match.");
        }
    };
    return (
        <div className="h-full flex">
            <div className="sm:w-3/4 m-auto w-11/12 xl:w-2/3">
                <div className="lg:grid lg:grid-cols-2 shadow-lg">
                    <div className="col-span-1 hidden lg:block bg-cover bg-[url(https://images.pexels.com/photos/7129160/pexels-photo-7129160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
                    </div>
                    <div className="bg-white col-span-1 dark:bg-slate-800 dark:text-white">
                        <form onSubmit={handleSubmit} className="py-10 px-5 md:px-10 text-center">
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
                            <h1 className="text-2xl font-medium my-5">Create an account</h1>
                            <div className="grid gap-5">
                                <div className="space-y-2">
                                    <label htmlFor="username" className="float-left text-sm lg:text-xs xl:text-sm">Username</label>
                                    <input type="text" id="username" className="p-3 w-full bg-gray-100" placeholder="Username" onChange={(event) => setUserName(event.target.value)} />
                                    <span id="usernameMsg"></span>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="float-left text-sm lg:text-xs xl:text-sm">Email Address</label>
                                    <input type="email" id="email" className="p-3 w-full bg-gray-100" placeholder="Email Address" onChange={(event) => setUserEmail(event.target.value)} />
                                    <span id="emailMsg"></span>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="float-left text-sm lg:text-xs xl:text-sm">Phone Number</label>
                                    <input type="tel" id="phone" className="p-3 w-full bg-gray-100" placeholder="Phone Number" onChange={(event) => setUserPhone(event.target.value)} />
                                    <span id="phoneMsg"></span>
                                </div>
                                <div className="grid sm:grid-cols-2 gap-x-2">
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="float-left text-sm lg:text-xs xl:text-sm">Password</label>
                                        <input type="password" id="password" className="p-3 w-full bg-gray-100" placeholder="Password" onChange={(event) => setUserPassword(event.target.value)} />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="confirmPassword" className="float-left text-sm lg:text-xs xl:text-sm">Confirm Password</label>
                                        <input type="password" id="confirmPassword" className="p-3 w-full bg-gray-100" placeholder="Confirm Password" onChange={(event) => setUserConfirmPassword(event.target.value)} />
                                    </div>
                                    <span id="passMsg"></span>
                                </div>
                                <div className="">
                                    <div className="flex">
                                        <input type="checkbox" id="terms" name="terms" />
                                        <label htmlFor="terms" className="ms-2 text-sm">I agree to terms and conditions</label>
                                    </div>
                                </div>
                                <button className="py-3 bg-black w-1/3 justify-self-center font-medium text-white disabled:bg-gray-500 disabled:text-white disabled:border-gray-500"
                                    type="submit"
                                    disabled={userName && userEmail && userPhone && userPassword && userConfirmPassword ? false : true}
                                >Register</button>
                                <div>
                                    Already have an account? <a href="/login"><span className="hover:text-lime-500 text-lime-700 font-bold"><br />Login Now!</span></a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;