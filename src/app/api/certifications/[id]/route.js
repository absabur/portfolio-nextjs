import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Certification from "@/models/certification";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const cert = await Certification.findById(id);
    if (!cert) throw new Error("Certification not found");
    return NextResponse.json({ cert }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't get certification" }, { status: 401 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const data = await request.json();
    const exists = await Certification.findById(id);
    if (!exists) throw new Error("Certification doesn't exist");
    const updated = await Certification.findByIdAndUpdate(id, {
      ...data,
      is_active: data.is_active === "true" || data.is_active === true,
      updateDate: localTime(),
    });
    return NextResponse.json({ message: "Certification updated successfully", data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't update certification" }, { status: 401 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const exists = await Certification.findById(id);
    if (!exists) throw new Error("Certification doesn't exist");
    await Certification.findByIdAndDelete(id);
    return NextResponse.json({ message: "Certification deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't delete certification" }, { status: 401 });
  }
}