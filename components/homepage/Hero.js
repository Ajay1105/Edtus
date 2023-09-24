import { success } from "@/assests/index.js";
import Crousel from "./Crousel.js";
import Image from "next/image.js";

const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-[#ADC4CE] ">

      <div className="flex flex-col md:flex-row w-[90%] h-2/5 mt-10 justify-between bg-white rounded-2xl">
        <p className="flex flex-col items-center ml-7 justify-center align-middle text-6xl mt-5 head_text">
          NAVIGATING
          <br />{" "}
          <span className="text-5xl flex flex-nowrap orange_gradient w-fit">
            the path of success,
          </span>
          TOGETHER
        </p>
        <Image src={success} alt="successImg" className=" h-[600px] w-auto" />
      </div>

      <Crousel />
    </div>
  );
};

export default Hero;
