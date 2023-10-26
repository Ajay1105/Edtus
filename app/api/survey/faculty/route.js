import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from '../../mongodb/connectDB.js'
import FacultyForm from "@/Model/FacultySurvey";

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
  
  await connectDB();
 
  const result = await FacultyForm.findOneAndUpdate(
    { userId: userId },
    { $push: { data: obj } },
    { new: true }
  ).exec();

  return NextResponse.json(
    {
      result: result,
    },
    { status: 200 }
  );
}
