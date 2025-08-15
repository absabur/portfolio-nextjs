"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { useParams } from "next/navigation";
import "../../../project/add/addProject.css";
import { revalidate } from "../../action";
import { useRouter } from "next/router";

const UpdateSkillPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [existingImage, setExistingImage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch existing skill
  useEffect(() => {
    const fetchSkill = async () => {
      try {
        const res = await fetch(`/api/skills/${id}`);
        if (!res.ok) throw new Error("Failed to fetch skill");
        const { skill } = await res.json();

        reset({
          name: skill.name || "",
          description: skill.description || "",
          proficiency: skill.proficiency || 0,
          type: skill.type || "",
        });

        if (skill.images) {
          setExistingImage(skill.images);
          setImagePreview(skill.images.url);
        }
      } catch (err) {
        console.error(err);
        toast.error(err.message);
      }
    };
    if (id) fetchSkill();
  }, [id, reset]);

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    if (imagePreview && imageFile) {
      URL.revokeObjectURL(imagePreview);
    }
    setImageFile(null);
    setImagePreview(null);
    setExistingImage(null);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Updating skill...");

    try {
      let imageData = existingImage;

      if (imageFile) {
        imageData = await clientCloudinary(imageFile, "skills");
      }

      if (!imageData) {
        toast.error("Please upload an image", { id: toastId });
        setLoading(false);
        return;
      }

      const formData = {
        ...data,
        proficiency: Number(data.proficiency),
        images: imageData,
      };

      const res = await fetch(`/api/skills/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update skill");
      revalidate();
      toast.success("Skill updated successfully!", { id: toastId });
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
        <h1 className="add-project-title">Update Skill</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="add-form">
          {/* Name */}
          <div className="form-group">
            <label className="form-label">Name *</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="form-input"
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea {...register("description")} className="form-textarea" />
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
            />
          </div>

          {/* Type */}
          <div className="form-group">
            <label className="form-label">Type</label>
            <input {...register("type")} className="form-input" />
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
            {loading ? "Updating..." : "Update Skill"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateSkillPage;
