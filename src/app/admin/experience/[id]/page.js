"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter, useParams } from "next/navigation";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { revalidate } from "../action";
import "../css/experience.css";

const EditExperiencePage = () => {
  const router = useRouter();
  const params = useParams();
  // Ensure ID is treated as a string, as provided by Next.js params
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  // --- Fetch Data and Populate Form ---
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/experiences/${id}`);
        if (!res.ok) throw new Error("Failed to fetch experience data");
        const data = await res.json();
        const item = data.exp;

        // Populate form fields with fetched data
        reset({
          ...item,
          // Ensure is_active is correctly reset for the checkbox input
          is_active: item.is_active || false,
        });

        // Set image preview if a logo URL exists
        if (item.logo) setImagePreview(item.logo);
      } catch (err) {
        console.error(err);
        toast.error(err.message || "Error fetching record");
      }
    };
    fetchData();
  }, [id, reset]);

  // --- Image Handlers ---
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // If the file is newly selected, create a local URL preview
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = (e) => {
    // Stop form submission if this button is inside the form
    if (e) e.preventDefault();
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(null);
    setImagePreview(null);
    // Clear the registered form value for 'logo' if it was pre-filled
    reset((prev) => ({ ...prev, logo: "" }));
  };

  // --- Submission Handler ---
  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Updating experience...");

    try {
      let logo = data.logo || ""; // Start with the existing logo URL from reset() or empty

      // 1. Check if a new file was selected
      if (imageFile) {
        const uploaded = await clientCloudinary(imageFile, "avatar");
        logo = uploaded.url;
      }
      // 2. If the user explicitly removed the image (imagePreview is null), logo should be empty.
      else if (!imagePreview) {
        logo = "";
      }
      // Otherwise, keep the original logo URL (logo = data.logo).

      const body = {
        ...data,
        logo,
        // Ensure checkbox value is treated as a boolean
        is_active: data.is_active === true,
      };

      const res = await fetch(`/api/experiences/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to update experience");
      await revalidate();
      toast.success("Experience updated successfully!", { id: toastId });
      router.push("/admin/experience");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Update failed", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="experience-edit-container">
      <h1 className="experience-edit-title">Edit Experience</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="experience-edit-form">
        {/* Role & Company Inputs */}
        <div className="experience-edit-group-grid">
          <div className="experience-edit-group">
            <label className="experience-edit-label">Role *</label>
            <input
              {...register("role", { required: "Role is required" })}
              className="experience-edit-input"
            />
          </div>
          <div className="experience-edit-group">
            <label className="experience-edit-label">Company *</label>
            <input
              {...register("company", { required: "Company is required" })}
              className="experience-edit-input"
            />
          </div>
        </div>

        <div className="experience-edit-group">
          <label className="experience-edit-label">Company URL</label>
          <input
            {...register("companyUrl")}
            className="experience-edit-input"
            placeholder="https://company.com"
          />
        </div>

        {/* Duration & Location Inputs */}
        <div className="experience-edit-group-grid">
          <div className="experience-edit-group">
            <label className="experience-edit-label">Duration</label>
            <input
              {...register("duration")}
              className="experience-edit-input"
              placeholder="e.g. Dec 2022 - Present"
            />
          </div>
          <div className="experience-edit-group">
            <label className="experience-edit-label">Location</label>
            <input
              {...register("location")}
              className="experience-edit-input"
            />
          </div>
        </div>

        <div className="experience-edit-group">
          <label className="experience-edit-label">
            Description (Key Responsibilities)
          </label>
          <textarea
            {...register("description")}
            className="experience-edit-textarea"
            rows="4"
          />
        </div>

        {/* Logo Upload */}
        <div className="experience-edit-group experience-edit-group-image">
          <label className="experience-edit-label">
            Company Logo (optional)
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className="experience-edit-input-file"
          />
          {imagePreview && (
            <div className="experience-edit-image-preview-wrapper">
              <img
                src={imagePreview}
                alt="Logo Preview"
                className="experience-edit-image-preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="experience-edit-remove-image-btn"
              >
                ×
              </button>
            </div>
          )}
        </div>

        {/* Order & Active Checkbox */}
        <div className="experience-edit-group-grid experience-edit-group-grid-meta">
          <div className="experience-edit-group">
            <label htmlFor="order" className="experience-edit-label">
              Order (Lower number appears first)
            </label>
            <input
              id="order"
              type="number"
              {...register("order", { valueAsNumber: true })}
              className="experience-edit-input"
            />
          </div>

          <div className="experience-edit-group experience-edit-checkbox-group">
            <label
              htmlFor="is_active"
              className="experience-edit-label-checkbox"
            >
              Active (Currently working here)
            </label>
            <input
              id="is_active"
              type="checkbox"
              {...register("is_active")}
              className="experience-edit-input-checkbox"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="experience-edit-submit-btn"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditExperiencePage;
