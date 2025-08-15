"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import "../../project/add/addProject.css";
import { revalidate } from "../action";
import { useRouter } from "next/router";

const CreateSkillPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    if (imagePreview) URL.revokeObjectURL(imagePreview);
    setImageFile(null);
    setImagePreview(null);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Creating skill...");

    try {
      if (!imageFile) {
        toast.error("Please upload an image", { id: toastId });
        setLoading(false);
        return;
      }

      const uploadedImage = await clientCloudinary(imageFile, "skills");

      const formData = {
        ...data,
        proficiency: Number(data.proficiency),
        images: uploadedImage,
      };

      const res = await fetch("/api/skills", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create skill");
      revalidate();
      toast.success("Skill created successfully!", { id: toastId });
      reset();
      removeImage();
      router.push("/");
    } catch (err) {
      console.error(err);
      toast.error(`Error: ${err.message}`, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="add-project-container">
        <h1 className="add-project-title">Add New Skill</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="add-form">
          {/* Name */}
          <div className="form-group">
            <label className="form-label">Name *</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="form-input"
              placeholder="Skill name"
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea
              {...register("description")}
              className="form-textarea"
              placeholder="Describe the skill..."
            />
          </div>

          {/* Proficiency */}
          <div className="form-group">
            <label className="form-label">Proficiency (0-100)</label>
            <input
              type="number"
              {...register("proficiency", {
                valueAsNumber: true,
                min: 0,
                max: 100,
              })}
              className="form-input"
              placeholder="e.g. 85"
            />
          </div>

          {/* Type */}
          <div className="form-group">
            <label className="form-label">Type</label>
            <input
              {...register("type")}
              className="form-input"
              placeholder="Frontend, Backend, DevOps, etc."
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label className="form-label">Skill Image *</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImagePreview}
              className="form-input"
            />
            {imagePreview && (
              <div className="image-preview">
                <img src={imagePreview} alt="Preview" />
                <button
                  type="button"
                  onClick={removeImage}
                  className="remove-image-btn"
                >
                  ×
                </button>
              </div>
            )}
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Creating..." : "Create Skill"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSkillPage;
