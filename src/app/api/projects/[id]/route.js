import cloudinary from "@/config/cloudinaryServer";
import connectDB from "@/config/db";
import { localTime } from "@/config/localtime";
import Project from "@/models/projects";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    await connectDB();
    const { id } = await params;
    const project = await Project.findById(id);
    if (!project) throw new Error("Project not found");

    return NextResponse.json({ project }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Can't get Project" },
      { status: 401 }
    );
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    await connectDB();
    const data = await request.json();
    const exists = await Project.findById(id);
    if (!exists) throw new Error("Project does't exists");
    const updated = await Project.findByIdAndUpdate(id, {
      ...data,
      published: data.published === "true" || data.published === true,
      updateDate: localTime(),
    });

    if (data.images.length) {
      const deleted = exists.images.map((item) => {
        return cloudinary.uploader.destroy(item.public_id);
      });
      await Promise.all(deleted);
    }

    return NextResponse.json(
      { message: "Project updated successfully", data: updated },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Can't update Project" },
      { status: 401 }
    );
  }
}
