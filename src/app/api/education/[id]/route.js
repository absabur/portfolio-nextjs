import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Education from "@/models/education";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const edu = await Education.findById(id);
    if (!edu) throw new Error("Education not found");
    return NextResponse.json({ edu }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't get education" }, { status: 401 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const data = await request.json();
    const exists = await Education.findById(id);
    if (!exists) throw new Error("Education doesn't exist");
    const updated = await Education.findByIdAndUpdate(id, {
      ...data,
      is_active: data.is_active === "true" || data.is_active === true,
      updateDate: localTime(),
    });
    return NextResponse.json({ message: "Education updated successfully", data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't update education" }, { status: 401 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const exists = await Education.findById(id);
    if (!exists) throw new Error("Education doesn't exist");
    await Education.findByIdAndDelete(id);
    return NextResponse.json({ message: "Education deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't delete education" }, { status: 401 });
  }
}