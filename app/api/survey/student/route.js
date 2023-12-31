import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from '../../mongodb/connectDB.js'
import Student from '@/Model/Student'
import StudentForm from "@/Model/StudentSurvey";

export async function POST(req, res) {
  const { userId } = getAuth(req);
  const data = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  
  const ans = data.answers;
  const type = data.type;
  
  const obj = {
    typeQuestion: type,
    questions: ans,
  };

  console.log(ans);
  
  await connectDB();
  const student = await Student.findOne({ userId: userId }).exec();
 
  const result = await StudentForm.findOneAndUpdate(
    { student: student },
    { $push: { data: obj } },
    { new: true }
  ).exec();
  console.log("result", result);

  return NextResponse.json(
    {
      result: result,
    },
    { status: 200 }
  );
}
