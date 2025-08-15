import cloudinary from "@/config/cloudinaryServer";
import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Skill from "@/models/skills";
import { NextResponse } from "next/server";

// GET a single Skill by ID
export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;

    const skill = await Skill.findById(id);
    if (!skill) throw new Error("Skill not found");

    return NextResponse.json({ skill }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Can't get Skill" },
      { status: 401 }
    );
  }
}

// UPDATE a Skill by ID
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const data = await request.json();

    const exists = await Skill.findById(id);
    if (!exists) throw new Error("Skill doesn't exists");

    await Skill.findByIdAndUpdate(id, {
      ...data,
      updateDate: localTime(),
    });

    if (data.images.public_id) {
      await cloudinary.uploader.destroy(exists.images.public_id);
    }

    return NextResponse.json(
      { message: "Skill updated successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Can't update Skill" },
      { status: 401 }
    );
  }
}
