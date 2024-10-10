import React from "react";
import { TfiMenuAlt } from "react-icons/tfi";

const Navbar = () => {
  return (
    <div className="bg-black">
      <div className="container flex items-center justify-between py-2 text-white">
        <h2 className="text-xs md:text-xl">Fashion Design</h2>
        <ul className=" hidden sm:flex  items-center text-white gap-2 md:gap-6 sm:text-xs">
          <li>Home</li>
          <li>Pages</li>
          <li>Portfolio</li>
          <li>Blogs</li>
          <li>Shop</li>
        </ul>
        <TfiMenuAlt className="text-[14px] sm:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
