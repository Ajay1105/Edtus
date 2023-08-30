import { success } from "@/assests/index.js";
import Crousel from "./Crousel.js";
import Image from "next/image.js";

const Hero = () => {
  return (
    <div className="flex flex-col items-center ">
      <Crousel />
      <div className="flex flex-col md:flex-row w-3/5 h-2/5 mt-28 px-20 justify-between bg-white rounded-2xl">
        <p className="flex flex-col items-center justify-center align-middle text-4xl text-[#FF6600]">
          NAVIGATING
          <br /> <span className="text-3xl flex flex-nowrap">the path of success,</span>
           TOGETHER
        </p>
        <Image src={success} width={300} height={550} />
      </div>
      <div className="flex w-4/5 justify-start my-5">
        <button className="text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] px-3 py-2 text-2xl">
          {`Survey Form ->`}{" "}
        </button>
      </div>
    </div>
  );
};

export default Hero;
