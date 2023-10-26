"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const Router = useRouter();
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");
  const [password, setPassword] = useState("");
  const facultyPassword = "12345678";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(name == "" || school == ""){
      alert ("You can't leave any input blank");
    } 
    else if (password == facultyPassword) {
      try {
        const response = await fetch(
          "https://edtus.vercel.app/api/survey/facultyauth",
          {
            method: "POST",
            body: JSON.stringify({
              name: name,
              school: school,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response) {
          throw new Error("Response is undefined");
        }
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        Router.replace("./faculty");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    } else {
      alert("wrong Password");
      setName("");
      setSchool("");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center align-middle">
      <h1 className="text-5xl text-blue-600">Faculty Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-6">
        <div className="my-4">
          <label for="name" className=" text-2xl pr-2">
            Name:
          </label>
          <input
            name="text"
            type="name"
            placeholder="Enter your email"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-2xl ml-[2.75rem] outline outline-2 outline-black rounded-lg"
          />
        </div>
        <div className="my-4">
          <label for="school" className=" text-2xl pr-2">
            School Id:
          </label>
          <input
            name="text"
            type="school"
            placeholder="Enter your email"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            className="text-2xl ml-2 outline outline-2 outline-black rounded-lg"
          />
        </div>
        <div className="my-4">
          <label for="password" className=" text-2xl pr-2">
            Password:
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="text-2xl ml-2 outline outline-2 outline-black rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg text-3xl italic mt-4 py-3"
          onClick={handleSubmit}
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default page;
