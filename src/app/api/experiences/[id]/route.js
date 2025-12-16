import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Experience from "@/models/experience";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const exp = await Experience.findById(id);
    if (!exp) throw new Error("Experience not found");
    return NextResponse.json({ exp }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't get experience" }, { status: 401 });
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const data = await request.json();
    const exists = await Experience.findById(id);
    if (!exists) throw new Error("Experience doesn't exist");
    const updated = await Experience.findByIdAndUpdate(id, {
      ...data,
      is_active: data.is_active === "true" || data.is_active === true,
      updateDate: localTime(),
    });
    return NextResponse.json({ message: "Experience updated successfully", data: updated }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't update experience" }, { status: 401 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const exists = await Experience.findById(id);
    if (!exists) throw new Error("Experience doesn't exist");
    await Experience.findByIdAndDelete(id);
    return NextResponse.json({ message: "Experience deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message || "Can't delete experience" }, { status: 401 });
  }
}