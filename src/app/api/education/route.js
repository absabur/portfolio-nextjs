import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Education from "@/models/education";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const edu = new Education({
      ...data,
      is_active: data.is_active === "true" || data.is_active === true,
      createDate: localTime(),
      updateDate: localTime(),
    });
    await edu.save();
    return NextResponse.json({ message: "Education added successfully", data: edu }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't add education" }, { status: 401 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const educations = await Education.find().sort({ order: 1, updateDate: -1 });
    return NextResponse.json({ educations }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Couldn't fetch education" }, { status: 401 });
  }
}