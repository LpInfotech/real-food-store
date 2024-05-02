"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faXmark,
  faCartShopping,
  faBell,
  faUser,
  faCircleUser,
  faLock,
  faCircleQuestion,
  faRightFromBracket,
  faSun,
  faMoon,
  faCircleHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { ProductsContext } from "../context/GetProducts";
  
const Navbar = ({ sendDataToParent = null, isSearch = false }) => {
  const [cartItems] = useContext(ProductsContext);

  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const search = () => {
    setSearchIsOpen(!searchIsOpen);
  };
  const [searchTerm, setSearchTerm] = useState("");

  // get value of search input
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    sendDataToParent(event.target.value);
  };
  // dropdown toggle
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const [showThemeDropdown, setShowThemeDropdown] = useState(false);
  const themeButton = () => {
    setShowThemeDropdown(!showThemeDropdown);
  };

  function darkTheme() {
    document.documentElement.classList.add("dark");
  }
  function lightTheme() {
    document.documentElement.classList.remove("dark");
  }

  return (
    <header>
      <nav className="relative py-4 md:px-20 px-5 flex justify-between items-center shadow shadow-slate-300 bg-white dark:bg-slate-800">
        {!searchIsOpen}
        <Link href="/" className="md:flex items-end">
          <img
          src="https://i.postimg.cc/5t1DXWdp/image-4-removebg-preview.png"
            alt="brain-food-logo"
            className="w-36 md:w-52 dark:invert"
          />
        </Link>
        {/* added search bar */}
        {isSearch && (
          <div className="border w-1/3 hidden md:block relative rounded-lg">
            <FontAwesomeIcon
              icon={faSearch}
              width={15}
              className="absolute text-gray-400 top-3 left-3"
            />
            <input
              className="w-full outline-none text-sm text-gray-700 px-10 py-3 bg-slate-100"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchTerm}
              onInput={handleInputChange}
            />
          </div>
        )}

        {/* added search bar */}
        <div className="flex justify-end md:justify-center items-center w-full md:w-auto gap-x-6">
          <div className="md:hidden">
            {isSearch && (
              <FontAwesomeIcon
                onClick={search}
                className="dark:text-white"
                icon={searchIsOpen ? faXmark : faSearch}
                width="20"
              />
            )}
            {searchIsOpen && isSearch && (
              <div className="max-w-md mx-auto w-full md:hidden">
                <div className="relative w-full rounded-lg  bg-white overflow-hidden">
                  <input
                    className="w-full outline-none text-sm bg-white text-gray-700 px-2"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                    value={searchTerm}
                    onInput={handleInputChange}
                  />
                </div>
              </div>
            )}
          </div>
          <Link href="#" className="relative dark:text-white">
            <FontAwesomeIcon icon={faBell} size="lg" />
            <span className="flex items-center justify-center absolute -right-2 -top-2 rounded-full text-white bg-red-500 w-4 h-4 text-[10px]">
              2
            </span>
          </Link>
          <Link
            href="/cart"
            className="relative flex items-center border-l ps-6 dark:text-white"
          >
            <FontAwesomeIcon icon={faCartShopping} size="lg" />
            <span className="flex items-center justify-center absolute -right-2 -top-2 rounded-full text-white bg-red-500 w-4 h-4 text-[10px]">
              {cartItems.cartList.length}
            </span>
          </Link>
          <div className="relative dark:text-white">
            <Link
              href="#"
              onClick={toggleDropdown}
              className="flex items-center border-l ps-6"
            >
              <FontAwesomeIcon icon={faUser} size="lg" />
              <span className="ps-1">User</span>
            </Link>
            <div
              className={`dropdown-content absolute top-20 -right-2 z-10 origin-top-right divide-y *:py-3 *:px-5 *:text-sm *:block *:text-gray-700 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                showDropdown ? "block" : "hidden"
              }`}
            >
              <a href="#" className="hover:font-bold">
                <FontAwesomeIcon icon={faCircleUser} />
                <span className="ms-3">View Profile</span>
              </a>
              <a href="#" className="hover:font-bold">
                <FontAwesomeIcon icon={faLock} />
                <span className="ms-3">Change Password</span>
              </a>
              <a href="#" className="hover:font-bold">
                <FontAwesomeIcon icon={faCircleQuestion} />
                <span className="ms-3">Online Help</span>
              </a>
              <a href="#" className="hover:font-bold">
                <FontAwesomeIcon icon={faRightFromBracket} />
                <span className="ms-3">Logout</span>
              </a>
            </div>
          </div>
          <div className="relative dark:text-white">
            <Link
              href="#"
              onClick={themeButton}
              className="flex items-center border-l ps-6"
            >
              <FontAwesomeIcon icon={faCircleHalfStroke} />
              <span className="ps-1">Theme</span>
            </Link>
            <div
              className={`dropdown-content absolute top-20 -right-2 z-10 origin-top-right divide-y *:py-3 *:px-5 *:text-sm *:block *:text-gray-700 w-28 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${
                showThemeDropdown ? "block" : "hidden"
              }`}
            >
              <button
                onClick={lightTheme}
                type="button"
                className="w-full hover:font-bold"
              >
                <FontAwesomeIcon icon={faSun} />
                <span className="ms-3">Light</span>
              </button>
              <button
                onClick={darkTheme}
                type="button"
                className="w-full hover:font-bold hover:rounded-b-md hover:text-white hover:bg-gray-700"
              >
                <FontAwesomeIcon icon={faMoon} />
                <span className="ms-3">Dark</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {searchIsOpen && isSearch && (
        <div
          className="relative w-full hidden md:block bg-white shadow-xl"
          id="search-content"
        >
          <div className="container mx-auto py-4 text-black">
            <input
              className="w-full h-8 outline-none text-sm bg-white text-gray-700 px-2"
              type="text"
              id="search"
              placeholder="Search something.."
              value={searchTerm}
              onInput={handleInputChange}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
