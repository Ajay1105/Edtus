"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const { userId } = useAuth();

  const fetchData = async () => {
    try {
      console.log("inside");
      const response = await fetch(
        "http://localhost:3000/api/mongodb/finduser",
        {
          method: "POST",
          body: JSON.stringify({
            userId:userId,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log(response);

      if (response.status === 404) {
        router.push("/signupdetails");
      } else {
        router.push("/");
      }
      console.log("outside");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>Loading</div>;
};

export default page;
