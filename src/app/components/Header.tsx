"use client"; // Use client directive
// page import
import Link from "next/link";
import FindStore from "../FindStore/page"
import Help from "../Help/page"
import join from "../join-us/page"
import Signin from "../sign-in/page"
import card from "../card/page"
import  mainpage  from "../new&/page"
//  image import 
import Image from "next/image";
import Frame from "public/Frame.png"
import vector from "public/vector1.png"





import React, { useState } from "react";
import { fromJSON } from "postcss";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <header className="shadow-md font-sans tracking-wide relative z-50">
      {/* Top Section */}
      <section className="py-2 bg-[#F5F5F5] text-black text-right px-10">
        <div className="text-sm flex ">
            <div>
                <img src="Frame.png" alt="Frame" />
            </div>
           <div >
            <ul className="flex  gap-5 font-bold ml-[850px]">
                <li>
                    <Link href="/FindStore">Find a Store <span className="ml-5">|</span></Link>
                </li>
                <li>
                    <Link href="/Help">Help <span className="ml-5">|</span> </Link>
                </li>
                <li>
                    <Link href="/join-us">Join Us<span className="ml-5">|</span>  </Link>
                </li>
                <li>
                    <Link href="/sign-in">Sign In </Link>
                </li>
            </ul>
           </div>
          </div>
      </section>

      {/* Main Header */}
      <div className="flex flex-wrap items-center justify-between px-10 py-4 min-h-[70px]">
        {/* Logo */}
        <a href="/">
          <img
            src="vector1.png"
            alt="logo"
            className="w-30"
          />
        </a> 
        {/* Navigation Menu */}
        <div
  className={`${
    isMenuOpen ? "block" : "hidden"
  } lg:flex lg:items-center gap-5 fixed lg:static bg-white w-full lg:w-auto lg:shadow-none shadow-lg p-5 lg:p-0 top-16 left-0 z-50`}
>
  <ul className="lg:flex lg:gap-5 space-y-3 lg:space-y-0">
    {[
      { name: "New & Featured", link: "/new&" },
      { name: "Men", link: "/" },
      { name: "Women", link: "/" },
      { name: "Kids", link: "/" },
      { name: "SNKRS", link: "/" },
    ].map((item, index) => (
      <li key={index}>
        <a
          href={item.link} // Add the link to the 'href' attribute
          className="hover:text-[#007bff] text-[#333] font-bold text-[15px]"
        >
          {item.name}
        </a>
      </li>
    ))}
  </ul>
</div>



        {/* Search & Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Search Button */}
          <button
            className="flex items-center justify-center w-8 h-8 rounded-full border hover:bg-gray-100"
            onClick={toggleSearch} 

            
          >
            {isSearchOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <circle cx={11} cy={11} r={8} />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            )}
          </button>
          <img className="w-6" src="/heart.png" alt="image" />
          <Link href="/card">
          <img src="/addtocard.png" alt=" add to card" /></Link>

          {/* Menu Toggle Button */}
          <button
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full border hover:bg-gray-100"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md p-4 z-40">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded-md p-2 focus:outline-none focus:ring focus:ring-[#007bff]"
          />
          <button
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center"
            onClick={toggleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full bg-white shadow-md p-5 lg:hidden z-40">
          <ul className="space-y-3">
            {["Home", "Team", "Feature", "Blog", "About", "Contact"].map(
              (item, index) => (
                <li key={index} className="flex items-center justify-between">
                  <a
                    href="javascript:void(0)"
                    className="hover:text-[#007bff] text-[#333] font-bold text-[15px]"
                  >
                    {item}
                  </a>
                  <button
                    className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-200"
                    onClick={toggleMenu}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
