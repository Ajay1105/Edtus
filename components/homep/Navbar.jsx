"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";


import Image from "next/image";
import { logo } from "@/assests";

const Navbar = () => {
  const Router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=" flex flex-row justify-between">
      <Image src={logo} width={""} height={""} className=" md:w-[320px] h-[80px] md:h-auto" />

      <div className="hidden md:visible md:flex flex-row justify-between align-middle items-center md:ml-20">
        <button className="bg-transparent text-3xl md:ml-20" onClick={()=>{Router.push('/')}}>Home</button>
        <button className="transparent text-3xl md:ml-20">Mentors</button>
        <button className="transparent text-3xl md:ml-20" onClick={()=>{Router.push('/test')}}>Quiz</button>
        <button className="transparent text-3xl md:ml-20" onClick={()=>{Router.push('/contact')}}>
        Contact Us
        </button>
        <button className="transparent w-10 h-10 md:ml-20"><UserButton afterSignOutUrl="/"/></button>
      </div>

      <button
        className={`${
          isMenuOpen ? "hidden" : "block"
        } md:hidden text-black text-2xl flex items-center`}
        onClick={toggleMenu}
      >
        ☰
      </button>

      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden py-5 flex-row justify-between w-1/3`}
      >
        <p className="text-extrabold px-4 text-red-400" onClick={toggleMenu}>
          X
        </p>
        <p className=" text-3xl md:ml-12">Home</p>
        <p className=" text-3xl md:ml-12">Mentors</p>
        <p className=" text-3xl md:ml-12">Quiz</p>
        <p className=" text-3xl md:ml-12">Contact Us</p>
        <p className=" text-3xl md:ml-12">Sign up</p>
      </div>
    </div>
  );
};

export default Navbar;
