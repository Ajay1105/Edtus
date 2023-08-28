"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import {logo} from '@/assests'
import Image from "next/image";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex justify-between px-10 md:px-20 font-sans font-semibold text-white align-middle bg-[#001065]">
      <Image src={logo} width={179} height={66} className="py-8 md:py-3"/>
      <ul className="hidden md:flex flex-row justify-between w-1/3 text-lg text-[#E36E20] items-center md:visible ">
        <li className="hover:text-stone-400 px-2">Home</li>
        <li className="hover:text-stone-400 px-2">Blog</li>
        <li className="hover:text-stone-400 px-2">Test</li>
        <li className="hover:text-stone-400 px-2"><UserButton afterSignOutUrl="/"/></li>
      </ul>
      <button
        className={`${
          isMenuOpen ? "hidden" : "block"
        } md:hidden text-white text-2xl`}
        onClick={toggleMenu}
      >
        ☰
      </button>
      <ul
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden py-5 flex-row justify-between w-1/3  text-[#E36E20] `}
      > <li className="text-extrabold px-4 text-red-400"
      onClick={toggleMenu}
      >X</li>
        <li className="py-2">Home</li>
        <li className="py-2">Blog</li>
        <li className="py-2">Test</li>
        <li className="py-2"><UserButton afterSignOutUrl="/"/></li>
      </ul>
    </div>
  );
};

export default Navbar;
