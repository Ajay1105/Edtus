import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex items-center justify-center align-middle w-[100vw] h-[100vh]">
      <SignUp redirectUrl="/signupdetails" />;
    </div>
  )
}