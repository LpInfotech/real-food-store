"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { ProductsContext } from "../context/GetProducts";
import { faBan, faCircleCheck, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userList] = useContext(ProductsContext);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState("");
  const [alertError, setAlertError] = useState("");
  const router = useRouter();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

  //toggle show password
  const toggle = () => {
    setIsPassVisible(!isPassVisible);
  }

  //   get values on form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const existingUser = userList.userList.find(
      (item) =>
        item.email === userEmail.toLowerCase() && item.password === userPassword
    );

    if (existingUser != undefined) {
      setAlertSuccess("Login successfull!");
      setTimeout(() => {
        router.push("/home");
      }, 1000);
    } else {
      setAlertError("Incorrect email address or password.");
      setTimeout(() => {
        setAlertError("");
      }, 2000);
    }
  };
  return (
    <div className="h-full flex">
      <div className="sm:w-3/4 m-auto w-11/12 xl:w-2/3">
        {alertSuccess.length > 0 && (
          <span className="bg-lime-50 border border-lime-500 rounded text-lime-600 absolute top-5 right-5 p-5">
            <span className="me-2"><FontAwesomeIcon icon={faCircleCheck} size="xl" /></span>
            {alertSuccess}
          </span>
        )}
        {alertError.length > 0 && (
          <span className="bg-red-200 border border-red-700 rounded text-red-700 absolute top-5 right-5 p-5">
            <span className="me-2"><FontAwesomeIcon icon={faBan} size="xl" /></span>
            {alertError}
          </span>
        )}
        <div className="lg:grid lg:grid-cols-2 shadow-lg">
          <div className="col-span-1 hidden lg:block bg-cover bg-[url(https://images.unsplash.com/photo-1628102491629-778571d893a3?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]"></div>
          <div className="bg-white col-span-1 dark:bg-slate-800 dark:text-white">
            <form
              noValidate
              onSubmit={handleSubmit}
              className="py-10 px-5 md:px-10"
            >
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
              <h1 className="mt-10 text-2xl font-medium mb-2 text-center">
                Welcome Back!
              </h1>
              <h6 className="mb-8 text-center">
                Login to your account in seconds
              </h6>
              <div className="grid gap-y-3">
                <div>
                  <label
                    htmlFor="email"
                    className="text-sm lg:text-xs xl:text-sm"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="p-3 w-full bg-gray-100"
                    placeholder="Email Address"
                    onChange={(event) => {
                      setUserEmail(event.target.value);
                      setIsValidEmail(emailRegex.test(userEmail));
                    }}
                  />
                  <div className="h-5">
                    {!isValidEmail && userEmail && (
                      <span className="text-red-500 text-sm">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="text-sm lg:text-xs xl:text-sm"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={!isPassVisible ? "password" : "text"}
                      id="password"
                      className="p-3 w-full bg-gray-100"
                      placeholder="Password"
                      onChange={(event) => {
                        setUserPassword(event.target.value);
                        setIsValidPassword(passwordRegex.test(userPassword));
                      }}
                    />
                    <button type="button" onClick={toggle} className="absolute right-4 bottom-3"
                      disabled={
                        userPassword
                          ? false
                          : true
                      }><FontAwesomeIcon icon={!isPassVisible ? faEye : faEyeSlash} /></button>
                  </div>
                  <div className="h-10">{!isValidPassword && userPassword && (
                    <span className="text-red-500 text-sm">
                      Password must contain min 8 characters, 1 number, 1
                      uppercase, 1 lowercase letter
                    </span>
                  )}</div>
                </div>
                <div className="text-end text-sm lg:text-xs xl:text-sm">
                  <a href="/forgot-password" className="text-lime-600">
                    Forgot Password?
                  </a>
                </div>
                <button
                  className="py-3 bg-black w-1/3 justify-self-center font-medium text-white disabled:bg-gray-500 disabled:text-white disabled:border-gray-500"
                  type="submit"
                  disabled={
                    userEmail && userPassword && isValidEmail && isValidPassword
                      ? false
                      : true
                  }
                >
                  Login
                </button>
                <div className="text-center">
                  Don't have an account?{" "}
                  <a href="/register">
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
    </div>
  );
};

export default Login;
