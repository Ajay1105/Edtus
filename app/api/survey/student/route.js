import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from '../../mongodb/connectDB.js'
import { Student } from "@/Model/Student";
import StudentForm from "@/Model/StudentSurvey";
import mongoose from "mongoose";

export async function POST(req, res) {
  const { userId } = getAuth(req);
  const data = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = userId ? await clerkClient.users.getUser(userId) : null;

  
  const ans = data.answers;
  const type = data.type;
  
  const obj = {
    typeQuestion: type,
    questions: ans,
  };

  console.log(ans);
  
  await connectDB();
  const student = await Student.findOne({ userId: userId }).exec();
  // const formData = {
  //   student: student,
  //   data: [
  //     {
  //       typeQuestion: 'Decisiveness Assessment for School Students',
  //       questions: [
  //         { id: 1, answer: 'Not confident' },
  //         { id: 2, answer: 'No' },
  //         { id: 3, answer: 'Prioritize based on importance' },
  //         { id: 4, answer: 'No' },
  //         { id: 5, answer: 'It depends' },
  //         { id: 6, answer: 'Yes' },
  //         { id: 7, answer: 'Gather information and analyze' },
  //         { id: 8, answer: 'Confident' },
  //         { id: 9, answer: 'No' },
  //       ],
  //     },
  //   ],
  // };

  // const result =await new StudentForm(formData);

  // result.save()
  // .then((savedForm) => {
  //   console.log('StudentForm saved successfully:', savedForm);
  // })
  // .catch((error) => {
  //   console.error('Error saving StudentForm:', error);
  // });


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
