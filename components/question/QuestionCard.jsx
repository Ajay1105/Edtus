'use client'

import { useState } from "react"

const QuestionCard = (props) => {

const [selectedOption, setSelectedOption] = useState(null)

  const handleChange = (e) => {
    setSelectedOption(e.target.value)
    props.onclick(props.id, e.target.value);
  }

  return (
    <div className="flex flex-col w-4/5 my-2 p-5 outline outline-black outline-1 rounded-lg">
    <p className=" text-xl text-black">{props.question}</p>
    <div className="flex flex-row justify-between mx-5"> <p>{props.options[0]}</p> <input type="checkbox" checked={selectedOption === props.options[0]} onChange={handleChange} value={props.options[0]} className="form-checkbox h-5 w-5 text-[#FF6600] border-2 border-[#FF6600] rounded-full focus:ring-2 focus:ring-[#FF6600]"/> </div>
    <div className="flex flex-row justify-between mx-5"> <p>{props.options[1]}</p> <input type="checkbox" checked={selectedOption === props.options[1]} onChange={handleChange} value={props.options[1]} className="form-checkbox h-5 w-5 text-[#FF6600] border-2 border-[#FF6600] rounded-full focus:ring-2 focus:ring-[#FF6600]"/> </div>
    <div className="flex flex-row justify-between mx-5"> <p>{props.options[2]}</p> <input type="checkbox" checked={selectedOption === props.options[2]} onChange={handleChange} value={props.options[2]} className="form-checkbox h-5 w-5 text-[#FF6600] border-2 border-[#FF6600] rounded-full focus:ring-2 focus:ring-[#FF6600]"/> </div>
    <div className="flex flex-row justify-between mx-5"> <p>{props.options[3]}</p> <input type="checkbox" checked={selectedOption === props.options[3]} onChange={handleChange} value={props.options[3]} className="form-checkbox h-5 w-5 text-[#FF6600] border-2 border-[#FF6600] rounded-full focus:ring-2 focus:ring-[#FF6600]"/> </div>
    </div>
  )
}

export default QuestionCard