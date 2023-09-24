import Image from "next/image";
import { laptop } from "@/assests";

const Mission = () => {
  return (
    <div className="bg-white flex my-5 flex-col md:h-[100vh] items-center align-middle justify-center">

      <div className="flex w-4/5 pt-8 flex-row justify-between md:space-x-3 align-middle items-center">
        <div className="flex flex-col md:mr-20">
          <h1 className="orange_gradient text-5xl">Our Mission</h1>
          <p className=" head_text ml-[4px] text-2xl">
            Empower Learning through Technology
          </p>
          <p className="flex wrap text-black mt-10 text-2xl">
            Edtus envisions a world where technology propels education to new
            heights. We're committed to crafting tools that empower schools,
            students, and educators for a brighter future.
          </p>
        </div>
        <Image src={laptop} height={780} width={1100} className="md:ml-32"/>
      </div>

      <div className="flex w-4/5 pt-8 flex-row justify-between align-middle items-center">
        <Image src={laptop} height={780} width={1100} className="md:mr:32" />
        <div className="flex flex-col md:ml-20">
          <h1 className="orange_gradient text-5xl">Why Edtus Matters</h1>
          {/* <p className=" head_text ml-[4px] text-2xl">Empower Learning through Technology</p>*/}
          <p className="flex wrap text-black mt-10 text-2xl">
            In a world where progress hinges on knowledge, Edtus bridges the gap
            between technology and education. We address the challenges of
            modern education head-on. From administrative efficiency to
            fostering student growth, Edtus is the answer to a more streamlined
            and impactful learning journey.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Mission;
