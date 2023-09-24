"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import Loading from '@/components/loading/Loading.jsx'

const page = () => {
  const router = useRouter();

  const { userId } = useAuth();

  const fetchData = async () => {
    try {
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

      if (response.status === 404) {
        router.push("/signupdetails");
      } else {
        router.push("/");
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div><Loading/></div>;
};

export default page;
