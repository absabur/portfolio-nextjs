import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Skill from "@/models/skills";
import { NextResponse } from "next/server";

// CREATE a Skill
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();

    const skill = new Skill({
      ...data,
      published: data.published === "true" || data.published === true,
      createDate: localTime(),
      updateDate: localTime(),
    });

    await skill.save();

    return NextResponse.json(
      { message: "Skill added successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Can't add Skill" },
      { status: 401 }
    );
  }
}

// GET all Skills
export async function GET() {
  try {
    await connectDB();
    const skills = await Skill.find().sort({ type: 1, updatedAt: -1 });
    return NextResponse.json({ skills }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Couldn't fetch skills" },
      { status: 401 }
    );
  }
}
