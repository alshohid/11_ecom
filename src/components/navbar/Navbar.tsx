"use client"
import React, { useState } from "react";
import Link from "next/link";
import logo from "../../../public/images/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCaretDown, FaCartShopping, FaBars } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import DarkMode from "./darkMode/DarkMode";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const Menu = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Top Rated", link: "/#services" },
    { id: 3, name: "Kids Wear", link: "/#" },
    { id: 4, name: "Mens Wear", link: "/#" },
    { id: 5, name: "Electronics", link: "/#" },
  ];

  const DropdownLinks = [
    { id: 1, name: "Trending Products", link: "/#" },
    { id: 2, name: "Best Selling", link: "/#" },
    { id: 3, name: "Top Rated", link: "/#" },
  ];

  return (
    <div className="shadow-md bg-white dark:text-white z-40">
      <div className="bg-amber-100 dark:bg-amber-500 py-2">
        <div className="container flex justify-between items-center">
          <div className="px-4">
            <Link
              href="#"
              className="font-bold text-2xl sm:text-3xl flex gap-2"
            >
              <img src={logo.src} alt="image" className="w-10" />
              shopsy
            </Link>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none dark:border-gray-500 dark:bg-gray-500"
              />
              <IoMdSearch className="text-gray-500 group-hover:text-yellow-200 absolute top-1/2 -translate-y-1/2 right-2" />
            </div>
            <button className="bg-gradient-to-r from-yellow-300 to-yellow-800 text-white py-1 px-4 rounded-full flex items-center gap-3">
              <span className="hidden  group-hover:block">Order</span>
              <FaCartShopping className="text-xl" />
            </button>
            <DarkMode />
            <div
              className="sm:hidden cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <MdClose size={24} /> : <FaBars size={24} />}
            </div>
          </div>
        </div>
      </div>

      {/* Menu for Large Screens */}
      <div data-aos="zoom-out" className={`flex justify-center dark:bg-gray-900`}>
        <ul className="sm:flex hidden items-center gap-4 dark:text-white">
          {Menu.map((item) => (
            <li key={item.id} className="px-3 py-2 hover:text-yellow-600">
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
          <li className="group relative cursor-pointer">
            <Link href="#" className="flex items-center gap-[2px]">
              Trending Products
              <FaCaretDown className="group-hover:rotate-180 transition-transform" />
            </Link>
            <div className="absolute z-[9999] hidden group-hover:flex flex-col w-[300px] rounded-md bg-white dark:bg-gray-900 p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.link}
                      className="inline-block w-full p-2 dark:text-white hover:bg-yellow-500"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 transition-all duration-300">
          <ul className="flex flex-col items-start gap-2 p-4 text-black dark:text-white">
            {Menu.map((item) => (
              <li
                key={item.id}
                className="w-full px-3 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
              >
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
            <li className="group relative cursor-pointer w-full">
              <Link href="#" className="flex items-center gap-[2px]">
                Trending Products
                <FaCaretDown className="ml-1" />
              </Link>
              <div className="mt-2">
                <ul>
                  {DropdownLinks.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={item.link}
                        className="block w-full p-2 dark:text-white hover:bg-yellow-500"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
