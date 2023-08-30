import Image from 'next/image'
import { laptop } from '@/assests';

const Mission = () => {
  return (
    <div className="bg-white flex justify-center">
      <div className="flex w-4/5 px-20 pt-8 flex-row justify-between align-middle items-center">
        <div className='flex flex-col'>
          <h1 className=" text-[#FF6600] text-5xl">Our Mission</h1>
          <p className=" text-[#FF6600] text-lg">Empower Learning through Technology</p>
          <p className="flex wrap text-black mt-20">
            Edtus envisions a world where technology propels education to new
            heights. We're committed to crafting tools that empower schools,
            students, and educators for a brighter future.
          </p>
        </div>
        <Image src={laptop} height={780} width={1100} />
      </div>
    </div>
  );
};

export default Mission;
