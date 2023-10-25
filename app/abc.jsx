import {Card, Form, GetStarted, Mentor, Overview, Quiz, Team} from '@/components/hpage'

 
export default function Home() {
  return (
    <div className="relative bg-white w-full h-[3616px] overflow-hidden text-left text-[23.04px] text-black font-text-lg-semibold">
      <img
        className="absolute top-[163px] left-[0px] w-[414px] h-[420.64px]"
        alt=""
        src="/group-458.svg"
      />
      <div className="absolute top-[800px] left-[0px] bg-lightsteelblue w-[1440px] h-[500px] overflow-hidden text-center text-base text-royalblue">
        <div className="absolute top-[16px] left-[338px] w-[768px] flex flex-col items-start justify-start gap-[12px]">
          <div className="self-stretch relative leading-[24px] font-semibold">
            Our Features
          </div>
          <div className="self-stretch relative text-17xl tracking-[-0.02em] leading-[44px] font-semibold text-gray1-100">{`Fostering a playful & engaging learning environment`}</div>
        </div>
      </div>
      <div className="absolute top-[141px] left-[768px] rounded-[50%] box-border w-[494px] h-[494px] border-[3px] border-solid border-royalblue" />
      <img
        className="absolute top-[163px] left-[791px] rounded-[50%] w-[494px] h-[494px] object-cover"
        alt=""
        src="/ellipse-169@2x.png"
      />
      <div className="absolute top-[86px] left-[69px] rounded-[32px] w-[582px] h-[388px]" />
      <b className="absolute top-[220px] left-[97px] text-[57.33px] inline-block w-[583px] h-[220px]">
        <span>{`Where Kids Learn `}</span>
        <span className="text-royalblue">Robotics</span>
        <span>{` with a `}</span>
        <span className="text-royalblue">Giggle</span>
        <span>{` and a `}</span>
        <span className="text-royalblue">Spark!</span>
      </b>
      <div className="absolute top-[480px] left-[96px] text-lgi-2 leading-[25px] font-light text-gray1-200 inline-block w-[625px] h-[99px]">
        We're all about creating playful learning experiences where kids can
        giggle and spark their curiosity while exploring the fascinating realm
        of robots."
      </div>
      <div className="absolute top-[567px] left-[-2672px] rounded-lg flex flex-row items-start justify-start text-lg text-white">
        <div className="rounded-lg bg-mediumslateblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#f4ebff] overflow-hidden flex flex-row items-center justify-center py-4 px-7 border-[1px] border-solid border-mediumslateblue">
          <div className="relative leading-[28px] font-semibold">
            Get Started
          </div>
        </div>
      </div>
      <GetStarted buttonText="Get Started" />
      <Mentor />
      <div className="absolute top-[577px] left-[817px] rounded-[50%] bg-royalblue box-border w-[42.84px] h-[42.84px] border-[0.8px] border-solid border-mediumslateblue" />
      <div className="absolute top-[120px] left-[750px] rounded-[688.5px] box-border w-[535px] h-[541px] border-[0.8px] border-solid border-royalblue" />
      <Form/>
      <img
        className="absolute top-[210px] left-[50px] w-2.5 h-[10.16px]"
        alt=""
        src="/ellipse-159.svg"
      />
      <div className="absolute top-[33px] left-[776px] font-medium inline-block w-24 h-6">
        Mentors
      </div>
      <div className="absolute top-[31px] left-[591px] font-medium inline-block w-[73px] h-6">
        Home
      </div>
      <div className="absolute top-[25px] left-[984px] tracking-[-0.02em] leading-[44px] font-medium text-gray1-100 text-center inline-block w-[116px] h-[44.71px]">
        Quiz
      </div>
      <div className="absolute top-[25px] left-[1212px] tracking-[-0.02em] leading-[44px] font-medium text-gray1-100 text-center inline-block w-32 h-[45px]">
        Contact Us
      </div>
      <Quiz />
      <img
        className="absolute top-[0px] left-[0px] w-[366px] h-[212px] object-cover"
        alt=""
        src="/whatsapp-image-20230930-at-15-1@2x.png"
      />
      <Overview/>
      <div className="absolute top-[2560px] left-[115px] text-lgi-2 leading-[100%] font-light font-lato inline-block w-[626px] h-[258px]">
        <p className="m-0">What they will gain by our sessions</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel libero eu tellus posuere consectetur. In hac habitasse platea dictumst. Sed quis sapien `}</p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">{`non quam lacinia rhoncus at ac turpis. Integer sed tristique arcu. Nulla facilisi. Fusce efficitur dolor ut justo facilisis, ut fermentum est sodales. Praesent id bibendum lorem. Maecenas pharetra, turpis ac `}</p>
        <p className="m-0">{`lacinia rhoncus at ac turpis. Integer sed tristique arcu. Nulla facilisi. Fusce efficitur dolor ut justo facilisis, ut fermentum est sodales. Praesent id bibendum lorem. Maecenas pharetra, turpis ac `}</p>
        <p className="m-0">&nbsp;</p>
      </div>
      <div className="absolute top-[2430px] left-[512px] text-17xl leading-[100%] font-semibold font-lato inline-block w-[415px] h-11">
        Book your session with us
      </div>
      <div className="absolute top-[2560px] left-[823px] w-[496px] h-[520px] font-lato">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-lightsteelblue w-[496px] h-[520px]" />
        <div className="absolute top-[50px] left-[32px] w-[423px] h-[427px]">
          <b className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[279px] h-[25px]">
            Email
          </b>
          <b className="absolute top-[124px] left-[0px] leading-[100%] inline-block w-[279px] h-[34px]">
            Phone number
          </b>
          <b className="absolute top-[242px] left-[0px] leading-[100%] inline-block w-[279px] h-[34px]">
            Message
          </b>
          <div className="absolute top-[46px] left-[0px] rounded-3xs bg-white w-[423px] h-[42px]" />
          <div className="absolute top-[164px] left-[0px] rounded-3xs bg-white w-[423px] h-[42px]" />
          <div className="absolute top-[282px] left-[0px] rounded-3xs bg-white w-[423px] h-[145px]" />
        </div>
      </div>
      <div className="absolute top-[2840px] left-[120px] w-[601px] h-[121px] font-lato">
        <b className="absolute top-[0px] left-[0px] leading-[100%] inline-block w-[601px] h-[121px]">
          <p className="m-0">Contact Us at:</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Email: robotics@nitj.ac.in</p>
          <p className="m-0">&nbsp;</p>
          <p className="m-0">Phone number: 1234567890</p>
        </b>
      </div>
      <div className="absolute top-[2396px] left-[336px] text-base leading-[24px] font-semibold text-royalblue text-center inline-block w-[768px]">
        Contact Us
      </div>
      <div className="absolute top-[3020px] left-[115px] rounded-lg flex flex-row items-start justify-start text-lg text-white">
        <div className="rounded-lg bg-cornflowerblue shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05),_0px_0px_0px_4px_#f4ebff] overflow-hidden flex flex-row items-center justify-center py-4 px-7 border-[1px] border-solid border-cornflowerblue">
          <div className="relative leading-[28px] font-semibold">Submit</div>
        </div>
      </div>
    </div>
  );
} 