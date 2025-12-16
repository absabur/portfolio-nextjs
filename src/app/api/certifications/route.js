import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Certification from "@/models/certification";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const cert = new Certification({
      ...data,
      is_active: data.is_active === "true" || data.is_active === true,
      createDate: localTime(),
      updateDate: localTime(),
    });
    await cert.save();
    return NextResponse.json({ message: "Certification added successfully", data: cert }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't add certification" }, { status: 401 });
  }
}

export async function GET() {
  try {
    await connectDB();
    const certifications = await Certification.find().sort({ order: 1, updateDate: -1 });
    return NextResponse.json({ certifications }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Couldn't fetch certifications" }, { status: 401 });
  }
}