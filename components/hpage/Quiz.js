import Image from 'next/image'

import GetStartedContainer from "./GetStarted";
import {screenshot} from '@/assests'

const QuizForm = () => {
  return (
    <div className="absolute top-[1297px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-[1440px] h-[523px] overflow-hidden text-left text-lgi-2 text-gray1-200 font-text-lg-semibold">
      <div className="absolute top-[175px] left-[101px] leading-[100%] font-light inline-block w-[666px] h-[133px]">
        <p className="m-0">Our motive behind quiz</p>
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
          libero eu tellus posuere consectetur. In hac habitasse platea
          dictumst. Sed quis sapien non quam lacinia rhoncus at ac turpim
          elementum. Sed tristique ullamcorper purus, at tincidunt massa
          venenatis nec. Proin pellentesque semper bibendum.
        </p>
      </div>
      <div className="absolute top-[52px] left-[619px] text-17xl leading-[20px] font-semibold text-black inline-block w-[202px] h-[58px]">
        <p className="m-0">&nbsp;</p>
        <p className="m-0">Take a Quiz</p>
      </div>
      <Image 
        className="absolute top-[100px] left-[965px] w-[386px] h-[333px] object-cover"
        alt=""
        width={100}
        height={100}
        src={screenshot}
      />
      <GetStartedContainer buttonText="Attempt Quiz" propTop="337px" />
      <div className="absolute top-[25px] left-[337px] text-base leading-[24px] font-semibold text-royalblue text-center inline-block w-[768px]">
        Test Yourself
      </div>
    </div>
  );
};

export default QuizForm;
