import { getAuth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import connectDB from "../../mongodb/connectDB";
import { Student } from "@/Model/Student";
import mongoose from "mongoose";

export async function GET(req, res) {
  const { userId } = getAuth(req);
  
  await connectDB();
  
  const student = await Student.findOne({userId:userId}).exec();
  const score = student.score;
  
  
  mongoose.connection.close();
  
  if(score == -1){
    return NextResponse.json({result:false},{ status: 201});
  }else{
     return NextResponse.json({result:true}, { status:200});
  } 
}

export async function POST(req, res){

}