// Navbar.js
import React from "react";
import Logo from "../../Asset/image/logo.png";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import Darkmode from "./Darkmode";

const Menu = [
  { id: 1, name: "Home", link: "/#" },
  { id: 2, name: "Best Seller", link: "/#Service" },
];

const DropdownLinks = [
  { name: "Top Seller", link: "/#" },
  { name: "New Arrivals", link: "/#" },
  { name: "Trendings", link: "/#" },
];

const Navbar = () => {
  return (
    <div className="shadow-md w-full bg-white dark:bg-gray-900 duration-200 relative z-40">
      <div className="container py-3 md:py-0">
        <div className="flex justify-between items-center">
          {/* logo section */}
          <div>
            <a href="#" className="flex items-center text-2xl sm:text-3xl gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              <span className="font-bold">Watch</span>Store
            </a>
          </div>

          {/* menu section */}
          <div className="flex items-center gap-2 lg:gap-2">
            <Darkmode />
            <ul className="hidden md:flex gap-4 items-center">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className="inline-block py-4 px-4 hover:text-primary">
                    {menu.name}
                  </a>
                </li>
              ))}
              {/* dropdown menu */}
              <li className="group relative cursor-pointer">
                <a href="#" className="flex h-[72px] items-center gap-[2px]">
                  Quick Links
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </a>
                <div className="absolute -left-9 z-[9999] hidden w-[150px] group-hover:block bg-white dark:bg-gray-950 dark:text-white p-2 shadow-md rounded-md">
                  <ul className="space-y-3">
                    {DropdownLinks.map((link) => (
                      <li key={link.name}>
                        <a href={link.link} className="inline-block w-full rounded-md p-2 hover:text-primary">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            </ul>
            {/* cart button */}
            <button onClick={() => alert('Cart is empty')} className="hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-4 rounded-full">
              <FaCartShopping className="text-xl text-black dark:text-white drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
