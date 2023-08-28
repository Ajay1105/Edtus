import { NextResponse } from "next/server";
import connectDB from '../connectDB'
import { School } from "@/Model/Student";
import mongoose from "mongoose";

export async function POST(req, res) {

  const data = await req.json();

  await connectDB();

  const school = new School({
    id: data.id,
    name: data.name,
  });
  await school.save();

  mongoose.connection.close();

  return NextResponse.json(
    {
      result: "Success",
    },
    { status: 200 }
  );
}
