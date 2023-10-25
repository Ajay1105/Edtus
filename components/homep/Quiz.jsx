"use client"
import Image from "next/image";
import { laptop2 } from "@/assests";
import { useRouter } from "next/navigation";

const Quiz = () => {
  const Router = useRouter();
  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <p className="text-[#4883FF] text-xl my-4">Test Yourself</p>
      <h2 className=" text-5xl font-bold">Take Quiz</h2>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col justify-center align-middle items-center">
          <p className="md:mx-32">
            Our motive behind quiz Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nullam vel libero eu tellus posuere consectetur. In
            hac habitasse platea dictumst. Sed quis sapien non quam lacinia
            rhoncus at ac turpim elementum. Sed tristique ullamcorper purus, at
            tincidunt massa venenatis nec. Proin pellentesque semper bibendum.{" "}
          </p>
          <button className=" bg-[#79A0F0] mt-6 px-4 py-4 w-[124px] h-[54px] rounded-xl text-white" onClick={()=>{Router.push('/test')}}>
            Take Quiz
          </button>
        </div>
        <div className="md:mx-24 flex">
          <Image src={laptop2} width={"auto"} height={"auto"} className="h-[300px] w-[400px]"/>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
