import { useMemo } from "react";

const GetStarted = ({ buttonText}) => {

  return (
    <div
      className="absolute top-[585px] left-[97px] bg-cornflowerblue flex flex-row items-start justify-start text-left text-lg text-white font-text-lg-semibold"
    >
      <div className="rounded-lg flex flex-row items-start justify-start">
        <div className="rounded-lg bg-cornflowerblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#f4ebff] overflow-hidden flex flex-row items-center justify-center py-4 px-7 border-[1px] border-solid border-cornflowerblue">
          <div className="relative leading-[28px] font-semibold">
            {buttonText}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
