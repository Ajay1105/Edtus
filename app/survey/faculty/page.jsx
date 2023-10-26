"use client";
import { useState } from "react";

import facultySurvey from "@/components/surveyforms/facultySurvey.js";
import QuestionCard from "@/components/surveyforms/QuestionCard.jsx";
import { Navbar } from "@/components/homep";

const page = () => {
  const maxPage = 2;

  const [page, setpage] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleClick = (id2, answer2) => {
    setAnswers((prevAnswers) => [
      ...prevAnswers,
      { id: Number(id2), answer: answer2 },
    ]);
  };

  const handleSubmit = () => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://edtus.vercel.app/api/survey/faculty",
          {
            method: "POST",
            body: JSON.stringify({
              type: facultySurvey[page].type,
              answers: answers,
            }),
          }
        );
      } catch (error) {
        console.error("An error occurred:", error);
      }
      setLoading(false);
    };

    fetchData();
    if (page < maxPage - 1) {
      setpage(page + 1);
    }
  };

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col items-center">
            <h1 className="text-blue-500 text-4xl italic font-semibold">
              Survey Form
            </h1>
            <h3 className="text-[#FF6600] text-3xl my-4 font-semibold">
              {facultySurvey[page].type}
            </h3>
            {facultySurvey[page].questions.map((question) => (
              <QuestionCard
                key={question.id}
                id={question.id}
                question={question.question}
                options={question.option}
                onclick={handleClick}
              />
            ))}
          </div>
          <button
            className="ml-[10%] text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600]  hover:outline hover:outline-[#FF6600]  px-10 py-3 text-2xl"
            onClick={() => handleSubmit()}
          >
            Next
          </button>
        </>
      )}
    </>
  );
};

export default page;
