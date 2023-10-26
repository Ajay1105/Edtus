"use client";

import { useState } from "react";

const page = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolID, setSchoolID] = useState();

  const handleSubmit = async () => {
    try {
      const response = await fetch("https://edtus.vercel.app/api/mongodb/addschool", {
        method: "POST",
        body: JSON.stringify({
          name: schoolName,
          id: schoolID,
        }),
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center align-middle h-[100vh] w-full">
      <p className=" text-4xl">Add School</p>
      <form
        onSubmit={handleSubmit}
        className="bg-white text-black rounded-xl p-5 flex flex-col"
      >
        <label htmlFor="SchoolName">School Name: </label>
        <input
          type="text"
          id="schoolName"
          value={schoolName}
          className=" outline-1 mx-5 my-3 outline-black outline rounded-lg focus:outline-2"
          onChange={(event) => setSchoolName(event.target.value)}
        />
        <label htmlFor="SchoolID">School ID: </label>
        <input
          type="text"
          id="schoolID"
          value={schoolID}
          className=" outline-1 mx-5 my-3 outline-black outline rounded-lg focus:outline-2"
          onChange={(event) => setSchoolID(event.target.value)}
        />
        <button className="text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] hover:outline hover:ouline-[#FF6600] px-3 py-2 text-2xl">
          Submit
        </button>
      </form>
    </div>
  );
};

export default page;
