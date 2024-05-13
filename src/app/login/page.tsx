"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/GetProducts";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userList] = useContext(ProductsContext);
  const router = useRouter();

  //   get values on form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const existingUser = userList.userList.find(
      (item) =>
        item.email === userEmail.toLowerCase() && item.password === userPassword
    );

    if (existingUser != undefined) {
      router.push("/home");
    } else {
      alert("This email address doesn't exist. Register with us!");
    }
  };
  return (
    <div className="h-full flex">
      <div className="sm:w-3/4 m-auto w-11/12 xl:w-2/3">
        <div className="lg:grid lg:grid-cols-2 shadow-lg">
          <div className="col-span-1 hidden lg:block bg-cover bg-[url(https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
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
              <h1 className="mt-10 text-2xl font-medium mb-1">Welcome Back!</h1>
              <h6 className="mb-8">Login to your account in seconds</h6>
              <div className="grid gap-5">
                <div className="space-y-2">
                  <label htmlFor="email" className="float-left text-sm lg:text-xs xl:text-sm">Email Address</label>
                  <input type="email" id="email" className="p-3 w-full bg-gray-100" placeholder="Email Address" onChange={(event) => setUserEmail(event.target.value)} />
                  <span id="emailMsg"></span>
                </div>
                <div className="space-y-2">
                  <label htmlFor="password" className="float-left text-sm lg:text-xs xl:text-sm">Password</label>
                  <input type="password" id="password" className="p-3 w-full bg-gray-100" placeholder="Password" onChange={(event) => setUserPassword(event.target.value)} />
                  <span id="passMsg"></span>
                </div>
                <div className="space-y-2">
                  <div className="text-end text-sm lg:text-xs xl:text-sm">
                    <a href="#" className="text-lime-600">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button className="py-3 bg-black w-1/3 justify-self-center font-medium text-white disabled:bg-gray-500 disabled:text-white disabled:border-gray-500"
                  type="submit"
                  disabled={userEmail && userPassword ? false : true}>Login
                </button>
                <div>
                  Don't have an account?{" "}
                  <a href="/register" target="_blank">
                    <span className="hover:text-lime-500 text-lime-700 font-bold">
                      <br />
                      Create Account
                    </span>
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

export default Login;
