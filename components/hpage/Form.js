import CardContainer from "./Card";

const Form = () => {
  return (
    <div className="absolute top-[960px] left-[95px] w-[1250px] h-[280px] text-center text-[23.04px] text-black font-text-lg-semibold">
      <div className="absolute top-[28px] left-[16px] w-[258px] h-[202px]">
        <img
          className="absolute top-[0px] left-[93px] w-[77px] h-[77px]"
          alt=""
          src="/icon-5.svg"
        />
        <b className="absolute top-[103px] left-[1px] inline-block w-64 h-7">
          Heading 1
        </b>
        <div className="absolute top-[162px] left-[0px] text-lgi-2 leading-[20px] inline-block w-[258px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
      </div>
      <CardContainer headingText="Heading 2" iconImageUrl="/icon-3.svg" />
      <CardContainer
        headingText="Heading 3"
        iconImageUrl="/icon-1.svg"
        propLeft="656px"
        propLeft1="93px"
        propRight="unset"
      />
      <CardContainer
        headingText="Heading 4"
        iconImageUrl="/icon-4.svg"
        propLeft="976px"
        propLeft1="unset"
        propRight="88px"
      />
    </div>
  );
};

export default Form;
