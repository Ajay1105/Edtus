import TeamMemberCard from "./Team";

const MentorCard = () => {
  return (
    <div className="absolute top-[1791px] left-[97px] w-[1243px] flex flex-col items-center justify-start gap-[40px] text-center text-base text-royalblue font-text-lg-semibold">
      <div className="w-[768px] flex flex-col items-center justify-start gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative leading-[24px] font-semibold">
            Tutors
          </div>
          <div className="self-stretch relative text-17xl tracking-[-0.02em] leading-[44px] font-semibold text-gray1-100">
            Meet the Mentors
          </div>
        </div>
        <div className="self-stretch relative text-xl leading-[30px] text-slategray">
          At Edtus, instructors are from R-tist Robotics NITJ. We offer the
          knowledge and abilities.
        </div>
      </div>
      <div className="w-[1200px] flex flex-row items-start justify-start gap-[32px] text-lg text-gray1-100">
        <TeamMemberCard
          avatarImageSrc="/avatar@2x.png"
          personName="Yuvraj Mehta"
          skillLabel="Skills"
          socialIconLabel="/social-icon.svg"
          socialIconImageUrl="/social-icon1.svg"
        />
        <TeamMemberCard
          avatarImageSrc="/avatar1@2x.png"
          personName="Narendra"
          skillLabel="Skills"
          socialIconLabel="/social-icon.svg"
          socialIconImageUrl="/social-icon1.svg"
        />
        <div className="self-stretch flex-1 rounded-3xs bg-lightsteelblue flex flex-col items-start justify-start p-6">
          <div className="self-stretch flex flex-col items-center justify-start gap-[20px]">
            <img
              className="rounded-21xl w-20 h-20 object-cover"
              alt=""
              src="/avatar1@2x.png"
            />
            <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
              <div className="self-stretch flex flex-col items-center justify-start gap-[8px]">
                <div className="self-stretch flex flex-col items-center justify-start">
                  <div className="self-stretch relative leading-[28px] font-medium">
                    Narendra
                  </div>
                  <div className="self-stretch relative text-base leading-[24px] text-slateblue">
                    Co-Founder, Edtus
                  </div>
                </div>
                <div className="self-stretch relative text-base leading-[24px] text-slategray inline-block h-[25px] shrink-0">
                  <p className="[margin-block-start:0] [margin-block-end:16px]">
                    Skills
                  </p>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center gap-[16px]">
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-icon.svg"
                />
                <img
                  className="relative w-5 h-5 overflow-hidden shrink-0"
                  alt=""
                  src="/social-icon1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <TeamMemberCard
          avatarImageSrc="/avatar@2x.png"
          personName="Yuvraj Mehta"
          skillLabel="Skills."
          socialIconLabel="/social-icon.svg"
          socialIconImageUrl="/social-icon1.svg"
        />
      </div>
    </div>
  );
};

export default MentorCard;
