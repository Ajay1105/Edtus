import Image from "next/image";

import CardContainer from "./Card";
import {icon5, icon1, icon3, icon4} from "@/assests";

const Form = () => {
  return (
    <div className="absolute top-[960px] left-[95px] w-[1250px] h-[280px] text-center text-[23.04px] text-black font-text-lg-semibold">
      <div className="absolute top-[28px] left-[16px] w-[258px] h-[202px]">
        <Image
          className="absolute top-[0px] left-[93px] w-[77px] h-[77px]"
          alt=""
          width={100}
          height={100}
          src={icon5}
        />
        <b className="absolute top-[103px] left-[1px] inline-block w-64 h-7">
          Heading 1
        </b>
        <div className="absolute top-[162px] left-[0px] text-lgi-2 leading-[20px] inline-block w-[258px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
      </div>
      <CardContainer headingText="Heading 2" iconImageUrl={icon3} />
      <CardContainer
        headingText="Heading 3"
        iconImageUrl={icon1}
        propLeft="656px"
        propLeft1="93px"
        propRight="unset"
      />
      <CardContainer
        headingText="Heading 4"
        iconImageUrl={icon4}
        propLeft="976px"
        propLeft1="unset"
        propRight="88px"
      />
    </div>
  );
};

export default Form;
