import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faFacebook, faInstagram, faBehance } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  function darkTheme() {
    document.documentElement.classList.add("dark");
  }
  function lightTheme() {
    document.documentElement.classList.remove("dark");
  }
  return (
    <footer className="bg-gray-100 sm:mt-10 mt-5 dark:bg-slate-800 dark:text-white">
      <hr />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 w-11/12 mx-auto py-10 gap-y-8">
        <div className="col-span-1">
          <Link href="/home" className="dark:hidden">
            <img
              src="https://i.postimg.cc/5t1DXWdp/image-4-removebg-preview.png"
              alt="lp-grocery-logo"
              className="md:w-52 w-36"
            />
          </Link>
          <Link href="/home" className="hidden dark:block">
            <img
              src="https://i.postimg.cc/SxxKrhq1/image-4-removebg-preview.png"
              alt="lp-grocery-logo"
              className="md:w-52 w-36"
            />
          </Link>
          <h3 className="mt-5 text-sm font-light">Sophisticated simplicity for <br />the independent mind.</h3>
          <div className="flex gap-x-5 sm:mt-5 mt-2">
            <a href="https://twitter.com/login"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://www.instagram.com/accounts/login/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://www.behance.net/"><FontAwesomeIcon icon={faBehance} /></a>
          </div>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-medium">Quick Links</h3>
          <ul className="sm:mt-5 mt-2 *:mb-1">
            <li className="hover:font-bold"><a href="/home">Homepage</a></li>
            <li className="hover:font-bold"><a href="/products">Shop Now</a></li>
            <li className="hover:font-bold"><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-medium">Categories</h3>
          <ul className="sm:mt-5 mt-2 *:mb-1">
            <li className="hover:font-bold"><a href="">Beverages</a></li>
            <li className="hover:font-bold"><a href="">Millets</a></li>
            <li className="hover:font-bold"><a href="">Dairy</a></li>
            <li className="hover:font-bold"><a href="">Sweet</a></li>
            <li className="hover:font-bold"><a href="">Oil</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-medium">Change Theme</h3>
          <ul className="sm:mt-5 mt-2 *:mb-1">
            <li><button
              onClick={lightTheme}
              type="button"
              className="hover:font-bold">
              <FontAwesomeIcon icon={faSun} />
              <span className="ms-3">Light</span></button>
            </li>
            <li><button
              onClick={darkTheme}
              type="button"
              className="hover:font-bold">
              <FontAwesomeIcon icon={faMoon} />
              <span className="ms-4">Dark</span></button>
            </li>
          </ul>
        </div>
      </div>
      <div className='bg-white dark:bg-slate-800 dark:text-white py-3 text-black text-center'>
        © All rights reserved<span className='text-amber-800 mx-2 dark:text-orange-500'>LP Grocery Store</span>{new Date().getFullYear()}.
      </div>
    </footer>
  );
};

export default Footer;