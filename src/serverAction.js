"use server";

import Project from "@/models/projects";
import connectDB from "./config/db";
import Skill from "./models/skills";

export const AllProjects = async () => {
  try {
    await connectDB();
    const projects = await Project.find();
    return { projects };
  } catch (error) {
    return { error };
  }
};
export const GetProjectByTitle = async (title) => {
  try {
    await connectDB();
    const project = await Project.findOne({ title });
    return { project };
  } catch (error) {
    return { error };
  }
};
export const AllSkills = async () => {
  try {
    await connectDB();
    const skills = await Skill.find().sort({ type: 1, updateDate: 1 });
    return { skills };
  } catch (error) {
    return { error };
  }
};
export const GetSkillByName = async (title) => {
  try {
    await connectDB();
    const skill = await Skill.findOne({ title });
    return { skill };
  } catch (error) {
    return { error };
  }
};
