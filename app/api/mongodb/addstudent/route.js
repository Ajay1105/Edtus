import { NextResponse } from 'next/server';
import connectDB from  '../connectDB'
import { School, Student } from '@/Model/Student';

connectDB();

export async function GET( req, res){
    
}

export async function POST(req, res){
    
  try {

    
    const newStudent = new Student({
      name: "data.name",
      set:" data.set",
    });
    await newStudent.save();
    // console.log('Score saved successfully.');
    return NextResponse.json({result: "success"});
    
  } catch (err) {
    console.error('Error saving the score:', err);
  }
}