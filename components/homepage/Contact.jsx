"use client";
import React, { useState } from "react";
import { emailImg, mobile } from "@/assests/index.js";
import Image from "next/image";

const contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { username, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };
    // handle it
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle md:h-[100vh] bg-[#ADC4CE]">
      <h2 className="text-7xl mt-10 font-semibold">Contact Us</h2>

      <div className="flex flex-row justify-between md:space-x-40 my-12">
        <div className="flex flex-row align-middle justify-center items-center w-[350px] h-auto max-h-[80px] mx-3 my-3 p-12 rounded-lg bg-[#FAF3F0]">
          <Image src={emailImg} alt="email" width={50} height={80} />
          <a href="mailto:hello@ajay.com" className="p-text mx-3 ">
            hello@ajay.com
          </a>
        </div>
        <div className="flex flex-row align-middle justify-center items-center w-[350px] h-auto max-h-[80px] mx-3 my-3 p-12 rounded-lg bg-[#E6FFFD]">
          <Image src={mobile} alt="phone" width={50} height={80} />
          <a href="tel:+91 123-456-7890" className="p-text mx-3">
            +91 123-456-7890
          </a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="flex flex-col">
          <div className=" w-[45vw] my-3 h-16 align-middle flex px-4 rounded-lg bg-[#E3F4F4]">
            <input
              className="p-text bg-[#E3F4F4]"
              type="text"
              placeholder="Your Name"
              name="username"
              value={username}
              onChange={handleChangeInput}
            />
          </div>
          <div className=" w-[45vw] my-3 h-16 align-middle flex px-4 rounded-lg bg-[#E3F4F4]">
            <input
              className="p-text bg-[#E3F4F4]"
              type="email"
              placeholder="Your Email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div className=" ">
            <textarea
              className="p-text w-[45vw] my-3 p-3 h-40 bg-[#E3F4F4]"
              placeholder="Your Message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
          </div>
          <button
            type="button"
            className=" self-center text-white rounded-xl mt-10 mb-10 bg-[#FF6600] hover:bg-white hover:text-[#FF6600] hover:outline hover:order-1 px-3 py-2 text-2xl w-60"
            onClick={handleSubmit}
          >
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className=" text-lg">Thank you for getting in touch!</h3>
        </div>
      )}
      <div className="mt-5"> All ©Copyrights reserved to Edtus</div>
    </div>
  );
};

export default contact;
