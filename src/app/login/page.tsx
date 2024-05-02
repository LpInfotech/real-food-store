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
      (item) => item.email === userEmail && item.password === userPassword
    );
    console.log(existingUser);

    if (existingUser != undefined) {
      router.push("/home");
    } else {
      alert("This email address doesn't exist. Register with us!");
    }
  };
  return (
    <div>
      <div className="w-3/4 m-auto h-screen flex justify-center">
        <div className="md:grid md:grid-cols-2 shadow-2xl ">
          <div className="col-span-1 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="h-full"
            />
          </div>
          <div className="bg-white col-span-1 flex flex-col justify-center py-20 sm:py-0">
            <div className="mx-auto">
              <Link href="/">
                <img
                  src="https://brainfoodstudio.com/wp-content/uploads/2018/07/brain-food-studio-logo-1200px.png"
                  alt="brain-food-logo"
                  className="w-36"
                />
              </Link>
            </div>
            <div className="text-center">
              <h1 className="mt-10 text-2xl font-medium mb-1">Welcome Back!</h1>
              <h6 className="mb-8">Login to your account in seconds</h6>
              <form onSubmit={handleSubmit}>
                <div className="mb-3 w-3/4 m-auto">
                  <label
                    htmlFor="email"
                    className="float-left me-5 mb-2 text-sm"
                  >
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    id="email"
                    className="p-3 w-full bg-gray-100"
                    placeholder="Email Address"
                    onChange={(event) => setUserEmail(event.target.value)}
                  />
                  <span id="emailMsg"></span>
                </div>
                <div className="mb-3 w-3/4 m-auto">
                  <label
                    htmlFor="password"
                    className="float-left me-5 mb-2 text-sm"
                  >
                    Password
                  </label>
                  <br />
                  <input
                    type="password"
                    id="password"
                    className="p-3 w-full bg-gray-100"
                    placeholder="Password"
                    onChange={(event) => setUserPassword(event.target.value)}
                  />
                  <span id="passMsg"></span>
                </div>
                <div className="w-3/4 m-auto mb-5 text-sm">
                  <div className="text-end col-span-1">
                    <a href="#" className="">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <button
                  className="mt-5 mb-3 py-3 bg-black w-1/3 font-medium text-white disabled:bg-slate-900"
                  type="submit"
                  disabled={userEmail && userPassword ? false : true}
                >
                  Login
                </button>
                <div>
                  Don't have an account?{" "}
                  <a href="/register" target="_blank">
                    <span className="hover:text-lime-500 text-lime-700 font-bold">
                      Create Account
                    </span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
