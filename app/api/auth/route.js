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

  const user = userId ? await clerkClient.users.getUser(userId) : null;

  await connectDB();

  var id = data.schoolID
  var sch = await School.findOne({ id: id }).exec();

  const User = new Student({
    userId: userId,
    name: data.name,
    class: data.class,
    section: data.section,
    schoolID: data.schoolID,
    school: sch._id,
  });
  await User.save();

  mongoose.connection.close();

  return NextResponse.json(
    {
      result: User,
    },
    { status: 200 }
  );
}
