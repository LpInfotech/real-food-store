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
    <footer className="bg-gray-100 mt-10 dark:bg-slate-800 dark:text-white">
      <div className="grid sm:grid-cols-4 mx-10 py-10 gap-y-8">
        <div className="col-span-1">
          <Link href="/" className="md:flex items-end">
            <img
              src="https://i.postimg.cc/5t1DXWdp/image-4-removebg-preview.png"
              alt="lp-grocery-logo"
              className="md:w-36 w-24"
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
          <ul className="sm:mt-5 mt-2 *:mb-3">
            <li className="hover:font-bold"><a href="/home">Homepage</a></li>
            <li className="hover:font-bold"><a href="/">Shop Now</a></li>
            <li className="hover:font-bold"><a href="/cart">Cart</a></li>
          </ul>
        </div>
        <div className="col-span-1">
          <h3 className="text-2xl font-medium">Change Theme</h3>
          <ul className="sm:mt-5 mt-2 *:mb-3">
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
        <div className="col-span-1">
          <h3 className="text-2xl font-medium">Our Newletters</h3>
          <p className="sm:my-5 my-2">Be the first who learns about our great promotions!</p>
          <input type="text" className="py-2 px-2 sm:px-4 sm:w-full" placeholder="Enter your email..."/>
          <button type="button" className="bg-black hover:bg-lime-500 text-white py-2 px-4 sm:mt-3 float-end">Subscribe</button>
        </div>
      </div>
      <div className='bg-white dark:bg-slate-800 dark:text-white py-3 text-black text-center mt-auto'>
        © All rights reserved<span className='text-amber-800 mx-2 dark:text-orange-500'>LP Grocery Store</span>{new Date().getFullYear()}.
      </div>
    </footer>
  );
};

export default Footer;