import { icon1, icon3, icon4, icon5 } from "@/assests";
import Image from "next/image";

const Features = () => {
  return (
    <div className="flex justify-center align-middle items-center">
      <div className="py-4 px-6 bg-[#4883FF] w-[100vw] -mx-10 -px-10 flex flex-col justify-between items-center align-middle">
        Our Features
        <p className="py-4">
          Fostering a playful & engaging learning environment
        </p>
        <div className="flex flex-row flex-wrap">
          <div className="flex flex-col w-56 mx-5  justify-center items-center align-middle">
            <Image src={icon1} height={100} width={100} />
            <h5 className="py-6">Heading 1</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col w-56 mx-5  justify-center items-center align-middle">
            <Image src={icon3} height={100} width={100} />
            <h5 className="py-6">Heading 1</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col w-56 mx-5  justify-center items-center align-middle">
            <Image src={icon4} height={100} width={100} />
            <h5 className="py-6">Heading 1</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col w-56 mx-5  justify-center items-center align-middle">
            <Image src={icon5} height={100} width={100} />
            <h5 className="py-6">Heading 1</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
