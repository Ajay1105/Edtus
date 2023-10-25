"use client"
import { faculty, student2 } from "@/assests";
import Image from "next/image";
import { useRouter } from "next/navigation";

const page = () => {
  const Router = useRouter();
  return (
    <div className="flex flex-col justify-center align-middle items-center">
      <h1 className="text-5xl my-12 text-blue-700">Choose Your Role</h1>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col rounded-lg md:mr-16 bg-[#F5F5DC]" onClick={()=>{Router.push('./survey/student')}}>
          <Image src={student2} height={220} width={220} />
          <h3 className="text-3xl italic ml-[3.5rem]">Student</h3>
        </div>
        <div className="flex flex-col rounded-lg bg-[#F5F5DC]"  onClick={()=>{Router.push('./survey/facultyauth')}}>
          <Image src={faculty} height={220} width={220} className="my-7"/>
          <h3 className="text-3xl italic ml-16">Faculty</h3>
        </div>
      </div>
    </div>
  );
};

export default page;
