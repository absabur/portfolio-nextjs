import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    const project = await new Project({
      ...data,
      published: data.published === "true" || data.published === true, 
      createDate: localTime(),
      updateDate: localTime(),
    });
    await project.save();
    return NextResponse.json(
      { message: "Project added successfully", data: project },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Can't add Project" },
      { status: 401 }
    );
  }
}

export async function GET(request) {
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json({ projects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Could't fetch projects" },
      { status: 401 }
    );
  }
}
