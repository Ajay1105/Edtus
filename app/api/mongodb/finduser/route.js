import { NextResponse } from 'next/server';
import connectDB from  '../connectDB'
import {  Student } from '@/Model/Student';
import mongoose from 'mongoose';



export async function POST(req, res){
    connectDB();
  try {
    
    const data = await req.json();
    const id = data.userId;

    const user = await Student.findOne({userId:id}).exec();

    if(user){
      return NextResponse.json({result: user},{status:200});
    }else{
      return NextResponse.json({result:"failed"},{status:404});
    }
    
  } catch (err) {
    console.error('Error saving the score:', err);
  }

  mongoose.connection.close();
}