"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loading from "@/components/loading/Loading.jsx";

const page = () => {
  const Router = useRouter();

  const [schoolID, setSchoolID] = useState("");
  const [classNumber, setClassNumber] = useState("");
  const [sectionNumber, setSectionNumber] = useState("");
  const [name, setname] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://edtus.vercel.app/api/auth", {
        method: "POST",
        body: JSON.stringify({
          name: name,
          schoolID: schoolID,
          class: classNumber,
          section: sectionNumber,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response) {
        throw new Error("Response is undefined");
      }

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      Router.push("/");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  const handleClassNumberChange = (event) => {
    // Check if the entered value is a number before updating the state
    // Check if the entered value is a number before updating the state
    const inputValue = event.target.value;
    if (/^\d+$/.test(inputValue) || inputValue === "") {
      setClassNumber(inputValue);
    }
  };

  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center align-middle outline outline-[#FF6600]">
      {loading ? (
        <Loading />
      ) : (
        <div className="outline outline-[#FF6600] rounded-xl p-8">
          <h1 className="text-[#FF6600] text-5xl py-8">Provide Your Details</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-white text-black rounded-xl p-5"
          >
            <div className="flex flex-col">
              <div>
                <label htmlFor="schoolID">School ID:</label>
                <input
                  type="text"
                  id="schoolID"
                  required="true"
                  value={schoolID}
                  className="px-2 outline-1 mx-5 my-3 outline-black outline rounded-lg focus:outline-2"
                  onChange={(event) => setSchoolID(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="classNumber">Class:</label>
                <input
                  type="text"
                  id="classNumber"
                  required="true"
                  value={classNumber}
                  className="px-2 outline-1 mx-5 my-3 outline-black outline rounded-lg  focus:outline-2"
                  onChange={(event) => handleClassNumberChange(event)}
                />
              </div>

              <div>
                <label htmlFor="sectionNumber">Section:</label>
                <input
                  type="text"
                  id="sectionNumber"
                  required="true"
                  value={sectionNumber}
                  className="px-2 outline-1 mx-5 my-3 outline-black outline rounded-lg  focus:outline-2"
                  onChange={(event) => setSectionNumber(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  required="true"
                  value={name}
                  className="px-2 outline-1 mx-5 my-3 outline-black outline rounded-lg  focus:outline-2"
                  onChange={(event) => setname(event.target.value)}
                />
              </div>

              <button className="text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] hover:outline hover:out-[#FF6600] px-3 py-2 text-2xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default page;
