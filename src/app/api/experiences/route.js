import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Experience from "@/models/experience";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const exp = new Experience({
      ...data,
      is_active: data.is_active === "true" || data.is_active === true,
      createDate: localTime(),
      updateDate: localTime(),
    });
    await exp.save();
    return NextResponse.json(
      { message: "Experience added successfully", data: exp },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't add experience" }, { status: 401 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const experiences = await Experience.find().sort({ order: 1, updateDate: -1 });
    return NextResponse.json({ experiences }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Couldn't fetch experiences" }, { status: 401 });
  }
}