"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { revalidate } from "../action";
import "../css/education.css";

const EditEducation = () => {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { register, handleSubmit, reset } = useForm();

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- Fetch Data and Populate Form ---
  useEffect(() => {
    if (!id) return;

    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/education/${id}`);
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        const edu = data.edu;

        // Populate form fields
        reset({
          ...edu,
          is_active: edu.is_active || false,
        });

        // Set image preview if an icon URL exists
        if (edu.icon) setImagePreview(edu.icon);
      } catch (err) {
        console.error(err);
        toast.error(err.message || "Error fetching record");
      }
    };
    fetchItem();
  }, [id, reset]);

  // --- Image Handlers ---
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = (e) => {
    if (e) e.preventDefault();
    if (imagePreview && imagePreview.startsWith("blob:")) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(null);
    setImagePreview(null);
    // Clear the registered form value for 'icon'
    reset((prev) => ({ ...prev, icon: "" }));
  };

  // --- Submission Handler ---
  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Updating education...");

    try {
      let icon = data.icon || "";

      if (imageFile) {
        const uploaded = await clientCloudinary(imageFile, "education");
        icon = uploaded.url;
      } else if (!imagePreview) {
        // If imagePreview is null, the icon was explicitly removed
        icon = "";
      }

      const body = {
        ...data,
        icon,
        is_active: data.is_active === true,
      };

      const res = await fetch(`/api/education/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Update failed");

      await revalidate();
      toast.success("Education record updated successfully!", { id: toastId });
      router.push("/admin/education");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Update failed", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="edu-edit-container">
      <h1 className="edu-edit-title">Edit Education Record</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="edu-edit-form">
        {/* Degree & Institution */}
        <div className="edu-edit-group-grid">
          <div className="edu-edit-group">
            <label className="edu-edit-label">Degree/Qualification</label>
            <input {...register("degree")} className="edu-edit-input" />
          </div>
          <div className="edu-edit-group">
            <label className="edu-edit-label">Institution/School</label>
            <input {...register("institution")} className="edu-edit-input" />
          </div>
        </div>

        {/* Duration & Color */}
        <div className="edu-edit-group-grid">
          <div className="edu-edit-group">
            <label className="edu-edit-label">Duration</label>
            <input {...register("duration")} className="edu-edit-input" />
          </div>
          <div className="edu-edit-group">
            <label className="edu-edit-label">Color (Hex code)</label>
            <input {...register("color")} className="edu-edit-input" />
          </div>
        </div>

        <div className="edu-edit-group">
          <label className="edu-edit-label">Description / Key Notes</label>
          <textarea
            {...register("description")}
            className="edu-edit-textarea"
            rows="4"
          />
        </div>

        {/* Order and Active Checkbox */}
        <div className="edu-edit-group-grid edu-edit-group-grid-meta">
          <div className="edu-edit-group">
            <label htmlFor="order" className="edu-edit-label">
              Order (Lower number appears first)
            </label>
            <input
              id="order"
              type="number"
              {...register("order", { valueAsNumber: true })}
              className="edu-edit-input"
              placeholder="0"
            />
          </div>
          <div className="edu-edit-group edu-edit-checkbox-group">
            <label htmlFor="is_active" className="edu-edit-label-checkbox">
              Active (Display on site)
            </label>
            <input
              id="is_active"
              type="checkbox"
              {...register("is_active")}
              className="edu-edit-input-checkbox"
            />
          </div>
        </div>

        {/* Icon Upload */}
        <div className="edu-edit-group edu-edit-group-image">
          <label className="edu-edit-label">Institution Icon</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className="edu-edit-input-file"
          />
          {imagePreview && (
            <div className="edu-edit-image-preview-wrapper">
              <img
                src={imagePreview}
                alt="Icon Preview"
                className="edu-edit-image-preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="edu-edit-remove-image-btn"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="edu-edit-submit-btn"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditEducation;
