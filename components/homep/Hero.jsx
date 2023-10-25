"use client"
import Image from "next/image";
import { ellipse2, ellipse170, placeholder } from "@/assests";
import { useRouter } from "next/navigation";


const Hero = () => {
  const Router = useRouter();
  return (
    <div className="flex flex-col md:flex-row my-20 items-center justify-center">
      <div className="flex flex-col md:mr-20">
        <div className="flex left-0 h-auto mx-1 md:w-[583px] md:h-[220px]">
          <b className="text-3xl md:text-[57.33px]">
            <span>{`Where Kids Learn `}</span>
            <span className="text-[#4883FF]">Robotics</span>
            <span>{` with a `}</span>
            <span className="text-[#4883FF]">Giggle</span>
            <span>{` and a `}</span>
            <span className="text-[#4883FF]">Spark!</span>
          </b>
        </div>
        <div className="my-5 flex flex-wrap text-lg leading-[25px] font-light text-[#161616] md:w-[625px] h-[99px]">
          We're all about creating playful learning experiences where kids can
          giggle and spark their curiosity while exploring the fascinating realm
          of robots."
        </div>
        <button className=" bg-[#79A0F0] mt-6 px-4 py-4 w-[124px] h-[54px] rounded-xl text-white" onClick={()=>{Router.push('/survey')}}>
          Take Survey
        </button>
      </div>

      <div className="inline-block w-[92vw] h-[345px] md:w-[560px] md:h-[560px]">
      <div className="relative top-0 left-0 w-[90vw] h-auto md:w-[550px] md:h-[550px]">
      <Image
        src={placeholder}
        height={""}
        width={""}
        className="absolute top-0 left-0 w-[344px] h-[344px] md:w-[534px] md:h-[541px] z-20"
      />
      <Image
        src={ellipse170}
        height={""}
        width={""}
        className="absolute top-0 left-0 w-[322px] h-[322px] md:w-[512px] md:h-[512px] z-10"
      />
      <Image
        src={ellipse2}
        height={""}
        width={""}
        className="absolute top-0 left-0 w-[304px] h-[304px] md:w-[494px] md:h-[494px]"
      />
    </div>
      </div>
    </div>
  );
};

export default Hero;
