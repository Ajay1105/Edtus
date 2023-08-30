"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

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
      const response = await fetch("http://localhost:3000/api/auth", {
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

      Router.push('/');
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full h-[100vh] justify-center items-center align-middle">
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <>
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
                  value={schoolID}
                  className=" outline-1 mx-5 my-3 outline-black outline rounded-lg focus:outline-2"
                  onChange={(event) => setSchoolID(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="classNumber">Class:</label>
                <input
                  type="text"
                  id="classNumber"
                  value={classNumber}
                  className=" outline-1 mx-5 my-3 outline-black outline rounded-lg  focus:outline-2"
                  onChange={(event) => setClassNumber(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="sectionNumber">Section:</label>
                <input
                  type="text"
                  id="sectionNumber"
                  value={sectionNumber}
                  className=" outline-1 mx-5 my-3 outline-black outline rounded-lg  focus:outline-2"
                  onChange={(event) => setSectionNumber(event.target.value)}
                />
              </div>

              <div>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  className=" outline-1 mx-5 my-3 outline-black outline rounded-lg  focus:outline-2"
                  onChange={(event) => setname(event.target.value)}
                />
              </div>

              <button className="text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] px-3 py-2 text-2xl">
                Submit
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default page;
