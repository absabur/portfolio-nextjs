"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { revalidate } from "../action";
import { useRouter } from "next/navigation";
import "../css/certification.css";

const AddCertPage = () => {
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
    const toastId = toast.loading("Creating certification...");

    try {
      let logo = "";
      if (imageFile) {
        const uploaded = await clientCloudinary(imageFile, "certs");
        logo = uploaded.url;
      }

      const body = {
        ...data,
        logo,
        // Ensure checkbox value is treated as a boolean
        is_active: data.is_active === true,
      };

      const res = await fetch("/api/certifications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Failed to create certification");

      await revalidate();
      toast.success("Certification created successfully!", { id: toastId });

      reset();
      removeImage();
      router.push("/admin/certifications");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Error creating certification", {
        id: toastId,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cert-add-container">
      <h1 className="cert-add-title">Add New Certification</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="cert-add-form">
        {/* Title, Issuer, Date - Grid for layout */}
        <div className="cert-add-group-grid cert-add-group-grid-three">
          <div className="cert-add-group">
            <label className="cert-add-label">Title *</label>
            <input
              {...register("title", { required: "Title required" })}
              className="cert-add-input"
            />
            {errors.title && (
              <span className="cert-add-error-message">
                {errors.title.message}
              </span>
            )}
          </div>
          <div className="cert-add-group">
            <label className="cert-add-label">Issuer</label>
            <input {...register("issuer")} className="cert-add-input" />
          </div>
          <div className="cert-add-group">
            <label className="cert-add-label">Date (e.g., Jan 2024)</label>
            <input {...register("date")} className="cert-add-input" />
          </div>
        </div>

        <div className="cert-add-group">
          <label className="cert-add-label">Description</label>
          <textarea
            {...register("description")}
            className="cert-add-textarea"
            rows="4"
          />
        </div>

        {/* URL and ID - Grid for layout */}
        <div className="cert-add-group-grid">
          <div className="cert-add-group">
            <label className="cert-add-label">Verify URL</label>
            <input
              {...register("url")}
              className="cert-add-input"
              placeholder="https://..."
            />
          </div>
          <div className="cert-add-group">
            <label className="cert-add-label">Credential ID</label>
            <input {...register("credentialId")} className="cert-add-input" />
          </div>
        </div>

        {/* Order and Active Checkbox - Grid for layout */}
        <div className="cert-add-group-grid cert-add-group-grid-meta">
          <div className="cert-add-group">
            <label htmlFor="order" className="cert-add-label">
              Order (Lower number appears first)
            </label>
            <input
              id="order"
              type="number"
              {...register("order", { valueAsNumber: true })}
              className="cert-add-input"
              placeholder="0"
              defaultValue={0}
            />
          </div>
          <div className="cert-add-group cert-add-checkbox-group">
            <label htmlFor="is_active" className="cert-add-label-checkbox">
              Active (Display on site)
            </label>
            <input
              id="is_active"
              type="checkbox"
              {...register("is_active")}
              className="cert-add-input-checkbox"
            />
          </div>
        </div>

        {/* Logo Upload */}
        <div className="cert-add-group cert-add-group-image">
          <label className="cert-add-label">Logo/Badge Image (optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className="cert-add-input-file"
          />
          {imagePreview && (
            <div className="cert-add-image-preview-wrapper">
              <img
                src={imagePreview}
                alt="Preview"
                className="cert-add-image-preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="cert-add-remove-image-btn"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="cert-add-submit-btn"
        >
          {loading ? "Creating..." : "Create Certification"}
        </button>
      </form>
    </div>
  );
};

export default AddCertPage;
