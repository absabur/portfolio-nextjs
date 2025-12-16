"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { revalidate } from "../action";
import "../css/certification.css";

const EditCert = () => {
  const router = useRouter();
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const {
    register,
    handleSubmit,
    reset,
    // Note: Errors are not explicitly used in the original edit logic, but included for completeness
    formState: { errors },
  } = useForm();

  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  // --- Fetch Data and Populate Form ---
  useEffect(() => {
    if (!id) return;

    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/certifications/${id}`);
        if (!res.ok) throw new Error("Fetch failed");
        const data = await res.json();
        const cert = data.cert;

        // Populate form fields with fetched data
        reset({
          ...cert,
          // Ensure is_active is correctly reset for the checkbox input
          is_active: cert.is_active || false,
        });

        // Set image preview if a logo URL exists
        if (cert.logo) setImagePreview(cert.logo);
      } catch (err) {
        console.error(err);
        toast.error(err.message || "Error fetching certification record");
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
    // Clear the registered form value for 'logo'
    reset((prev) => ({ ...prev, logo: "" }));
  };

  // --- Submission Handler ---
  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Updating certification...");

    try {
      let logo = data.logo || "";

      if (imageFile) {
        const uploaded = await clientCloudinary(imageFile, "certs");
        logo = uploaded.url;
      } else if (!imagePreview) {
        // If imagePreview is null, the logo was explicitly removed
        logo = "";
      }

      const body = {
        ...data,
        logo,
        is_active: data.is_active === true,
      };

      const res = await fetch(`/api/certifications/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) throw new Error("Update failed");

      await revalidate();
      toast.success("Certification updated successfully!", { id: toastId });
      router.push("/admin/certifications");
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Update failed", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cert-edit-container">
      <h1 className="cert-edit-title">Edit Certification</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="cert-edit-form">
        {/* Title, Issuer, Date - Grid for layout */}
        <div className="cert-edit-group-grid cert-edit-group-grid-three">
          <div className="cert-edit-group">
            <label className="cert-edit-label">Title</label>
            <input {...register("title")} className="cert-edit-input" />
          </div>
          <div className="cert-edit-group">
            <label className="cert-edit-label">Issuer</label>
            <input {...register("issuer")} className="cert-edit-input" />
          </div>
          <div className="cert-edit-group">
            <label className="cert-edit-label">Date (e.g., Jan 2024)</label>
            <input {...register("date")} className="cert-edit-input" />
          </div>
        </div>

        <div className="cert-edit-group">
          <label className="cert-edit-label">Description</label>
          <textarea
            {...register("description")}
            className="cert-edit-textarea"
            rows="4"
          />
        </div>

        {/* URL and ID - Grid for layout */}
        <div className="cert-edit-group-grid">
          <div className="cert-edit-group">
            <label className="cert-edit-label">Verify URL</label>
            <input
              {...register("url")}
              className="cert-edit-input"
              placeholder="https://..."
            />
          </div>
          <div className="cert-edit-group">
            <label className="cert-edit-label">Credential ID</label>
            <input {...register("credentialId")} className="cert-edit-input" />
          </div>
        </div>

        {/* Order and Active Checkbox - Grid for layout */}
        <div className="cert-edit-group-grid cert-edit-group-grid-meta">
          <div className="cert-edit-group">
            <label htmlFor="order" className="cert-edit-label">
              Order (Lower number appears first)
            </label>
            <input
              id="order"
              type="number"
              {...register("order", { valueAsNumber: true })}
              className="cert-edit-input"
              placeholder="0"
            />
          </div>
          <div className="cert-edit-group cert-edit-checkbox-group">
            <label htmlFor="is_active" className="cert-edit-label-checkbox">
              Active (Display on site)
            </label>
            <input
              id="is_active"
              type="checkbox"
              {...register("is_active")}
              className="cert-edit-input-checkbox"
            />
          </div>
        </div>

        {/* Logo Upload */}
        <div className="cert-edit-group cert-edit-group-image">
          <label className="cert-edit-label">Logo/Badge Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImagePreview}
            className="cert-edit-input-file"
          />
          {imagePreview && (
            <div className="cert-edit-image-preview-wrapper">
              <img
                src={imagePreview}
                alt="Preview"
                className="cert-edit-image-preview"
              />
              <button
                type="button"
                onClick={removeImage}
                className="cert-edit-remove-image-btn"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="cert-edit-submit-btn"
        >
          {loading ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditCert;
