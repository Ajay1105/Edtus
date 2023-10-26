"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import AlreadySubmitted from "../../components/question/AlreadySubmitted.jsx";
import Loading from '@/components/loading/Loading.jsx'

const Questionmap = dynamic(
  () => import("../../components/question/QuestionMap.jsx"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [testStatus, settestStatus] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const response = await fetch("https://edtus.vercel.app/api/test/teststatus", {
      method: "GET",
    });
    const data = await response.json();
    
    if (!data.result) {
      settestStatus(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {testStatus ? (
        loading ? (
          <Loading/>
        ) : (
          <AlreadySubmitted/>
        )
      ) : (
        <Questionmap />
      )}
    </div>
  );
}
