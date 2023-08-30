"use client";
import { useState } from "react";

import questions from "./questions";
import QuestionCard from "./QuestionCard";
import { Navbar } from "../homepage";

const Questionmap = () => {
  const [random, setRandom] = useState(Math.floor(Math.random() * 3));
  const [answers, setAnswers] = useState({});

  const handleClick = (id, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [id]: answer,
    }));
  };

  const calculateScore = async () => {
    let score = 0;

    questions[random].questions.forEach((question) => {
      if (answers[question.id] === question.correctOption) {
        score += 1;
      }
    });

    try {
      await fetch("http://localhost:3000/api/testscore", {
        method: "POST",
        body: JSON.stringify({
          score: score,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
    return score;
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="text-[#FF6600] text-4xl font-semibold">Test</h1>
        {questions[random].questions.map((question) => (
          <QuestionCard
            key={question.id}
            id={question.id}
            question={question.question}
            options={question.options}
            onclick={handleClick}
          />
        ))}
      </div>
      <button
        className="ml-[10%] text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] px-10 py-3 text-2xl"
        onClick={() => alert(`score ${calculateScore()}`)}
      >
        Submit
      </button>
    </>
  );
};

export default Questionmap;
