"use client"
import { useRouter } from "next/navigation"

const AlreadySubmitted = () => {
  const Router = useRouter();
  return (
    <div className='flex h-[100vh] justify-center align-middle items-center flex-col'>
        <p className='text-[#FF6600] text-3xl'>You have alredy given test</p>
        <button className="mt-5 text-white rounded-xl bg-[#FF6600] hover:bg-white hover:text-[#FF6600] hover:outline hover:outline-[#FF6600] px-3 py-2 text-2xl"
        onClick={()=>{Router.push('/')}}
        >Return Home </button>
    </div>
  )
}

export default AlreadySubmitted