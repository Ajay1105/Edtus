"use client";
import { useRouter } from "next/navigation";

const page = () => {
  const Router = useRouter();

  const handleClick = () => {
    Router.replace("/");
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle h-[100vh]">
      <p className="text-3xl">Your Test is successfully submitted</p>
      <button
        onClick={handleClick}
        className="mt-5 text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] hover:outline hover:outline-[#FF6600] px-10 py-3 text-2xl"
      >
        Return Home
      </button>
    </div>
  );
};

export default page;
