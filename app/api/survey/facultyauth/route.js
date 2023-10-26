import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../../mongodb/connectDB.js";
import FacultyForm from "@/Model/FacultySurvey.js";

export async function POST(req, res) {
  const { userId } = getAuth(req);
  const data = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const name = data.name;
  const schoolId = data.school;

  await connectDB();

  const faculty = await FacultyForm.findOneAndUpdate(
    { userId: userId },
    {
      name: name,
      userId: userId,
      schoolId: schoolId,
    },
    {
      upsert: true, // Create if not found
      new: true, // Return the updated document
    }
  ).exec();

  return NextResponse.json(
    {
      result: faculty,
    },
    { status: 200 }
  );
}
