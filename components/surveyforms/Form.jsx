"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import StudentSurvey from './studentSurvey.js';
import QuestionCard from "./QuestionCard.jsx";
import { Navbar } from "../homepage";

const Form = (props) => {
  const Router = useRouter();

  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(false);

  const handleClick = (id, answer) => {
    console.log("clicked");
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const handleSubmit = () => {
    console.log(answers);
  }

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <>
          <Navbar />
          <div className="flex flex-col items-center">
            <h1 className="text-[#FF6600] text-4xl font-semibold">Test</h1>
            {StudentSurvey[props.page].questions.map((question) => (
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

export default Form;
