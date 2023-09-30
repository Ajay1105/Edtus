import { useMemo } from "react";

const Card = ({
  headingText,
  iconImageUrl,
  propLeft,
  propLeft1,
  propRight,
}) => {
  const benefit2Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const icon3Style = useMemo(() => {
    return {
      left: propLeft1,
      right: propRight,
    };
  }, [propLeft1, propRight]);

  return (
    <div
      className="absolute top-[28px] left-[336px] w-[258px] h-[202px] text-center text-[23.04px] text-black font-text-lg-semibold"
      style={benefit2Style}
    >
      <div className="absolute top-[103px] left-[0px] w-[258px] h-[99px]">
        <b className="absolute top-[0px] left-[1px] inline-block w-64 h-7">
          {headingText}
        </b>
        <div className="absolute top-[59px] left-[0px] text-lgi-2 leading-[20px] inline-block w-[258px]">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. `}</div>
      </div>
      <img
        className="absolute top-[0px] left-[93px] w-[77px] h-[77px]"
        alt=""
        src={iconImageUrl}
        style={icon3Style}
      />
    </div>
  );
};

export default Card;
