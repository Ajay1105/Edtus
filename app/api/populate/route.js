import { auth, clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../mongodb/connectDB";
import { Student, School } from "@/Model/Student";
import mongoose from "mongoose";

export async function POST(req, res) {
  const { userId } = getAuth(req);
  const data = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await connectDB();

  var id = data.id

  const respo = await School.findOne({ id: id }).populate('students').exec();
  
  mongoose.connection.close();

  return NextResponse.json(
    {
      result: "User",
    },
    { status: 200 }
  );
}
