import { NextResponse } from "next/server";
import courses from './data.json'
import { v4 as uuidv4 } from "uuid";
export async function GET(request) {
  // Do whatever you want
 const response = {
  data: courses,
  message: "success"
 }
  return NextResponse.json(response, {status: 200});
}

export async function POST(request) {
    try {
      const { title, instructor, duration, level, description } = await request.json();
      console.log({ title, instructor, duration, level, description });
  
      const newData = {
        id: uuidv4(),
        title,
        instructor,
        duration,
        level,
        description
      }

      const response = {
        data: newData,
        message: "success"
      };
      
      courses.courses.push(newData);
      console.log({newData, courses});
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 200
      });
    } catch (error) {
      console.error("Error processing the request:", error);
      const response = {
        message: "error"
      };
      
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json"
        },
        status: 500
      });
    }
  }