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
            <div className="w-3/4 m-auto">
                <div className="md:grid md:grid-cols-2 shadow-2xl ">
                    <div className="col-span-1 hidden sm:block bg-cover bg-[url(https://images.pexels.com/photos/7129160/pexels-photo-7129160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)]">
                    </div>
                    <div className="bg-white col-span-1 flex flex-col justify-center py-20 md:py-8">
                        <div className="mx-auto">
                            <Link href="/">
                                <img
                                    src="https://brainfoodstudio.com/wp-content/uploads/2018/07/brain-food-studio-logo-1200px.png"
                                    alt="brain-food-logo"
                                    className="w-36" />
                            </Link>
                        </div>
                        <div className="text-center">
                            <h1 className="text-2xl font-medium my-10">Create an account</h1>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3 w-3/4 m-auto">
                                    <label htmlFor="username" className="float-left me-5 mb-2 text-sm">Username</label><br />
                                    <input type="text" id="username" className="p-3 w-full bg-gray-100" placeholder="Username" onChange={(event) => setUserName(event.target.value)}/>
                                    <span id="usernameMsg"></span>
                                </div>
                                <div className="mb-3 w-3/4 m-auto">
                                    <label htmlFor="email" className="float-left me-5 mb-2 text-sm">Email Address</label><br />
                                    <input type="email" id="email" className="p-3 w-full bg-gray-100" placeholder="Email Address" onChange={(event) => setUserEmail(event.target.value)}/>
                                    <span id="emailMsg"></span>
                                </div>
                                <div className="mb-3 w-3/4 m-auto">
                                    <label htmlFor="phone" className="float-left me-5 mb-2 text-sm">Phone Number</label><br />
                                    <input type="tel" id="phone" className="p-3 w-full bg-gray-100" placeholder="Phone Number" onChange={(event) => setUserPhone(event.target.value)} />
                                    <span id="phoneMsg"></span>
                                </div>
                                <div className="mb-3 w-3/4 m-auto grid grid-cols-2 gap-x-2">
                                    <div><label htmlFor="password" className="float-left me-5 mb-2 text-sm">Password</label><br />
                                        <input type="password" id="password" className="p-3 w-full bg-gray-100" placeholder="Password" onChange={(event) => setUserPassword(event.target.value)}/>
                                    </div>
                                    <div>
                                        <label htmlFor="confirmPassword" className="float-left me-5 mb-2 text-sm">Confirm Password</label><br />
                                        <input type="password" id="confirmPassword" className="p-3 w-full bg-gray-100" placeholder="Confirm Password" onChange={(event) => setUserConfirmPassword(event.target.value)}/>
                                    </div>
                                    <span id="passMsg"></span>
                                </div>
                                <div className="w-3/4 m-auto mb-7">
                                    <div className="text-start flex">
                                        <input type="checkbox" id="terms" name="terms" />
                                        <label htmlFor="terms" className="ms-2 text-sm">I agree to terms and conditions</label>
                                    </div>
                                </div>
                                <button className="my-5 py-3 bg-black w-1/3 font-medium text-white" 
                                type="submit"
                                disabled={userName && userEmail && userPhone && userPassword && userConfirmPassword ? false : true}
                                >Register</button>
                                <div>
                                    Already have an account? <a href="/login"><span className="hover:text-lime-500 text-lime-700 font-bold"><br />Login Now!</span></a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;