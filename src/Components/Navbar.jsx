import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { HashLink } from "react-router-hash-link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 bg-white w-full dark:bg-slate-900 dark:text-white z-50">
      <div className="container mx-auto py-5 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <img className="w-16 sm:w-10" src="images/logo.png" alt="Logo Here" />
          <span className="text-xl font-semibold  sm:block">MUSTAFA TARIQ</span>
        </div>
        <ul className="md:flex hidden space-x-10 text-gray-600 dark:text-gray-100 font-bold text-sm uppercase">
          <li className="hover:text-gray-400 ease-in duration-150">
            <Link to="/" >Home</Link>
            {/* <HashLink to="/Home.jsx">Link to Hash Fragment</HashLink> */}
          </li>
          <li className="hover:text-gray-400 ease-in duration-150">
            {/* <Link to="/about">About me</Link> */}
            <HashLink to="/about">About</HashLink>
          </li>
          <li className="hover:text-gray-400 ease-in duration-150">
            <Link to="/services">Services</Link>
          </li>
          <li className="hover:text-gray-400 ease-in duration-150">
            <Link to="/works">Works</Link>
          </li>
          <li className="hover:text-gray-400 ease-in duration-150">
            <Link to="/contact">Contacts</Link>
          </li>
        </ul>
        <img
          src="images/moon.png"
          alt="moon img"
          className="w-7 hidden md:block cursor-pointer"
        />

        <div
          className="space-y-1 block md:hidden cursor-pointer p-2"
          onClick={toggleMenu}
        >
          <div
            className={`w-6 h-0.5 bg-black dark:bg-white transform transition-all ${
              isOpen ? "rotate-45 mb-[-5px]" : "rotate-0"
            }`}
          ></div>

          <div
            className={`w-6 h-0.5 bg-black dark:bg-white transform transition-all ${
              isOpen ? "-rotate-45" : "rotate-0"
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-black dark:bg-white transform transition-all ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
        </div>
        <ul
          className={`bg-indigo-500 dark:bg-indigo-900 dark:text-gray-100 absolute top-20 duration-1000 ease-in left-0 w-full p-10 rounded-b-3xl space-y-6 text-white text-center ${
            isOpen ? "" : "hidden"
          }`}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About me</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
