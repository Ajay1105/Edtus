"use client";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";


import Image from "next/image";
import { logo } from "@/assests";

const Navbar = () => {
  const Router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isSignedIn } = useUser();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="mx-4 md:mx-0 flex flex-row justify-between">
      <Image src={logo} width={""} height={""} className="w-[220px] md:w-[320px] h-[60px] md:h-auto" onClick={()=>{Router.replace('/')}}/>

      <div className="hidden md:visible md:flex flex-row justify-between align-middle items-center md:ml-20">
        <button className="bg-transparent hover:text-gray-600 text-3xl md:ml-20" onClick={()=>{Router.push('/')}}>Home</button>
        <button className="transparent hover:text-gray-600 text-3xl md:ml-20" onClick={()=>{Router.push('/blog')}}>Blogs</button>
        <button className="transparent hover:text-gray-600 text-3xl md:ml-20" onClick={()=>{Router.push('/test')}}>Quiz</button>
        <button className="transparent hover:text-gray-600 text-3xl md:ml-20" onClick={()=>{Router.push('/contact')}}>
        Contact Us
        </button>
        {
          isSignedIn?(
            <button className="transparent w-10 h-10 md:ml-20"><UserButton afterSignOutUrl="/"/></button>
          ):(
            <button className="transparent text-3xl md:ml-20" onClick={()=>{Router.push('/sign-in')}}>Sign In</button>
          )
        }
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
        <p className=" text-xl" onClick={()=>{Router.push('/')}}>Home</p>
        <p className=" text-xl" onClick={()=>{Router.push('/blog')}}>Blogs</p>
        <p className=" text-xl" onClick={()=>{Router.push('/test')}}>Quiz</p>
        <p className=" text-xl" onClick={()=>{Router.push('/contact')}}>Contact Us</p>
        {
          isSignedIn?(
            <button className="transparent w-10 h-10"><UserButton afterSignOutUrl="/"/></button>
          ):(
            <button className="text-xl" onClick={()=>{Router.push('/sign-in')}}>Sign In</button>
          )
        }
      </div>
    </div>
  );
};

export default Navbar;
