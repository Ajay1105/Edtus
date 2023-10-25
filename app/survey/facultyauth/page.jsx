"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const id = "faculty";
  const facultyPassword = "12345678"

  const handleSubmit = (e) => {
    console.log('clicked')
    e.preventDefault();
    if(id == email && password == facultyPassword){
      Router.replace('./faculty')
    }
    else{
      alert("wrong email or password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center align-middle">
      <h1 className="text-5xl text-blue-600">Faculty Sign In</h1>
      <form onSubmit={handleSubmit} className="flex flex-col mt-6">
        <div className="my-4">
          <label for="email" className=" text-2xl pr-2">
            Email:
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-2xl ml-12 outline outline-2 outline-black rounded-lg"
          />
        </div>
        <div>
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
