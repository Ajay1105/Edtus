import { clerkClient } from "@clerk/nextjs";
import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../mongodb/connectDB";
import { Student } from "@/Model/Student";
import mongoose from "mongoose";

export async function POST(req, res) {
  const { userId } = getAuth(req);
  const data = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = userId ? await clerkClient.users.getUser(userId) : null;

  await connectDB();

  const score2 = data.score;

  const result = await Student.findOneAndUpdate({ userId: userId },{score:score2},{new:true});

  mongoose.connection.close();

  return NextResponse.json(
    {
      result: result,
    },
    { status: 200 }
  );
}
