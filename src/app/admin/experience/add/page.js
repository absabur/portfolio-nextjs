"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { useRouter } from "next/navigation";
import { revalidate } from "../action";
import "../css/experience.css";

const AddExperiencePage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
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
    const toastId = toast.loading("Creating experience...");

    try {
      let logo = "";
      if (imageFile) {
        const uploaded = await clientCloudinary(imageFile, "avatar");
        logo = uploaded.url;
      }

      const body = {
        ...data,
        logo,
        // Ensure checkbox value is treated as a boolean
        is_active: data.is_active === true,
      };

      const res = await fetch("/api/experiences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to create experience");
      await revalidate();
      toast.success("Experience created successfully!", { id: toastId });
      reset();
      removeImage();
      router.push("/admin/experience");
    } catch (err) {
      console.error(err);
      toast.error(`Error: ${err.message}`, { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="experience-add-container">
      <h1 className="experience-add-title">Add New Experience Entry</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="experience-add-form">
        {/* Role & Company Inputs */}
        <div className="experience-add-group-grid">
          <div className="experience-add-group">
            <label className="experience-add-label">Role *</label>
            <input
              {...register("role", { required: "Role is required" })}
              className="experience-add-input"
            />
            {errors.role && (
              <span className="experience-add-error-message">
                {errors.role.message}
              </span>
            )}
          </div>

          <div className="experience-add-group">
            <label className="experience-add-label">Company *</label>
            <input
              {...register("company", { required: "Company is required" })}
              className="experience-add-input"
            />
            {errors.company && (
              <span className="experience-add-error-message">
                {errors.company.message}
              </span>
            )}
          </div>
        </div>

        <div className="experience-add-group">
          <label className="experience-add-label">Company URL</label>
          <input
            {...register("companyUrl")}
            className="experience-add-input"
            placeholder="https://company.com"
          />
        </div>

        {/* Duration & Location Inputs */}
        <div className="experience-add-group-grid">
          <div className="experience-add-group">
            <label className="experience-add-label">Duration</label>
            <input
              {...register("duration")}
              className="experience-add-input"
              placeholder="e.g. Dec 2022 - Present"
            />
          </div>
          <div className="experience-add-group">
            <label className="experience-add-label">Location</label>
            <input {...register("location")} className="experience-add-input" />
          </div>
        </div>

        <div className="experience-add-group">
          <label className="experience-add-label">
            Description (Key Responsibilities)
          </label>
          <textarea
            {...register("description")}
            className="experience-add-textarea"
            rows="4"
          />
        </div>

        {/* Logo Upload */}
        <div className="experience-add-group experience-add-group-image">
          <label className="experience-add-label">
            Company Logo (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className="experience-add-input-file"
          />
          {imagePreview && (
            <div className="experience-add-image-preview-wrapper">
              <img
                src={imagePreview}
                alt="Logo Preview"
                className="experience-add-image-preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="experience-add-remove-image-btn"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Order & Active Checkbox */}
        <div className="experience-add-group-grid experience-add-group-grid-meta">
          <div className="experience-add-group">
            <label htmlFor="order" className="experience-add-label">
              Order (Lower number appears first)
            </label>
            <input
              id="order"
              type="number"
              {...register("order", { valueAsNumber: true })}
              className="experience-add-input"
              defaultValue={0}
            />
          </div>

          <div className="experience-add-group experience-add-checkbox-group">
            <label
              htmlFor="is_active"
              className="experience-add-label-checkbox"
            >
              Active (Currently working here)
            </label>
            <input
              id="is_active"
              type="checkbox"
              {...register("is_active")}
              className="experience-add-input-checkbox"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="experience-add-submit-btn"
        >
          {loading ? "Creating..." : "Create Experience"}
        </button>
      </form>
    </div>
  );
};

export default AddExperiencePage;
