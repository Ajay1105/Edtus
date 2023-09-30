const TeamMemberCard = ({
  avatarImageSrc,
  personName,
  skillLabel,
  socialIconLabel,
  socialIconImageUrl,
}) => {
  return (
    <div className="self-stretch flex-1 rounded-3xs bg-lightsteelblue flex flex-col items-start justify-start p-6 text-center text-lg text-gray1-100 font-text-lg-semibold">
      <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
        <img
          className="rounded-21xl w-20 h-20 object-cover"
          alt=""
          src={avatarImageSrc}
        />
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
            <div className="self-stretch flex flex-col items-center justify-start">
              <div className="self-stretch relative leading-[28px] font-medium">
                {personName}
              </div>
              <div className="self-stretch relative text-base leading-[24px] text-slateblue">
                Co-Founder, Edtus
              </div>
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-slategray">
              {skillLabel}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src={socialIconLabel}
            />
            <img
              className="relative w-5 h-5 overflow-hidden shrink-0"
              alt=""
              src={socialIconImageUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberCard;
