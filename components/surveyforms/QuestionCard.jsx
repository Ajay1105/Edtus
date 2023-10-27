"use client";

import { useState } from "react";

const QuestionCard = (props) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    props.onclick(props.id, e.target.value);
  };

  return (
    <div className="flex flex-col w-4/5 my-2 p-5 outline outline-black outline-1 rounded-lg">
      <p className=" text-xl mb-1 text-black">{props.question}</p>
      {props.options.map((option) => {
        return (
          <div className="flex flex-row">
            <input
              type="checkbox"
              checked={selectedOption === option}
              onChange={handleChange}
              value={option}
              className="form-checkbox h-5 w-5 my-2 text-[#FF6600] border-2 border-[#FF6600] rounded-full focus:ring-2 focus:ring-[#FF6600]"
            />
            <p className="mx-4 my-2">{option}</p>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionCard;
