"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import "./addProject.css";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { revalidate } from "../action";
import { useRouter } from "next/router";

const AddProjectPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [techInput, setTechInput] = useState("");

  const handleImagePreview = (e) => {
    const files = Array.from(e.target.files);
    setImagePreviews((prev) => [
      ...prev,
      ...files.map((file) => ({
        file,
        preview: URL.createObjectURL(file),
      })),
    ]);
  };

  const removeImage = (index) => {
    setImagePreviews((prev) => {
      const newPreviews = [...prev];
      URL.revokeObjectURL(newPreviews[index].preview);
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  const addTechnology = () => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setTechnologies((prev) => [...prev, techInput.trim()]);
      setTechInput("");
    }
  };

  const removeTechnology = (tech) => {
    setTechnologies((prev) => prev.filter((t) => t !== tech));
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Creating project...");

    try {
      const formData = {
        ...data,
        technologies,
        images: [],
      };

      // Upload images to Cloudinary
      if (imagePreviews.length > 0) {
        for (let i = 0; i < imagePreviews.length; i++) {
          const uploadedImage = await clientCloudinary(
            imagePreviews[i].file,
            "gallery"
          );
          formData.images.push(uploadedImage);
        }
      } else {
        toast.error("Please upload at least one image", { id: toastId });
        setLoading(false);
        return;
      }

      // Send data to API
      const res = await fetch("/api/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to create project");
      const result = await res.json();
      await revalidate(result.data.title.replace(/ /g, "__"));
      toast.success("Project created successfully!", { id: toastId });
      reset();
      setTechnologies([]);
      setImagePreviews([]);
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
        <h1 className="add-project-title">Add New Project</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="project-form">
          {/* Title */}
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              Title *
            </label>
            <input
              id="title"
              type="text"
              {...register("title", { required: "Title is required" })}
              className="form-input"
              placeholder="Project title"
            />
            {errors.title && (
              <span className="error-message">{errors.title.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              {...register("description")}
              className="form-textarea"
              placeholder="Describe your project..."
            />
          </div>

          {/* Technologies */}
          <div className="form-group">
            <label htmlFor="technologies" className="form-label">
              Technologies
            </label>
            <div className="flex gap-2">
              <input
                id="technologies"
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                className="form-input flex-1"
                placeholder="Add technology"
                onKeyDown={(e) =>
                  e.key === "Enter" && (e.preventDefault(), addTechnology())
                }
              />
              <button
                type="button"
                onClick={addTechnology}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Add
              </button>
            </div>
            <div className="tech-tags-container">
              {technologies.map((tech) => (
                <span key={tech} className="tech-tag">
                  {tech}
                  <span
                    className="tech-tag-remove"
                    onClick={() => removeTechnology(tech)}
                  >
                    ×
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* URLs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label htmlFor="liveUrl" className="form-label">
                Live URL *
              </label>
              <input
                id="liveUrl"
                type="url"
                {...register("liveUrl", { required: "Live URL is required" })}
                className="form-input"
                placeholder="https://example.com"
              />
              {errors.liveUrl && (
                <span className="error-message">{errors.liveUrl.message}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="frontendCodeUrl" className="form-label">
                Frontend Code URL
              </label>
              <input
                id="frontendCodeUrl"
                type="url"
                {...register("frontendCodeUrl")}
                className="form-input"
                placeholder="https://github.com/your-repo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="backendCodeUrl" className="form-label">
                Backend Code URL
              </label>
              <input
                id="backendCodeUrl"
                type="url"
                {...register("backendCodeUrl")}
                className="form-input"
                placeholder="https://github.com/your-repo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="fullstackCodeUrl" className="form-label">
                Fullstack Code URL
              </label>
              <input
                id="fullstackCodeUrl"
                type="url"
                {...register("fullstackCodeUrl")}
                className="form-input"
                placeholder="https://github.com/your-repo"
              />
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label htmlFor="user" className="form-label">
                Demo User
              </label>
              <input
                id="user"
                type="text"
                {...register("user")}
                className="form-input"
                placeholder="Optional demo username"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="form-label">
                Demo Password
              </label>
              <input
                id="password"
                type="text"
                {...register("password")}
                className="form-input"
                placeholder="Optional demo password"
              />
            </div>
          </div>

          {/* YouTube Link */}
          <div className="form-group">
            <label htmlFor="youtubeLink" className="form-label">
              YouTube Link
            </label>
            <input
              id="youtubeLink"
              type="url"
              {...register("youtubeLink")}
              className="form-input"
              placeholder="https://youtube.com/your-video"
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label className="form-label">Project Images *</label>
            <div className="image-upload-container">
              <input
                type="file"
                id="images"
                accept="image/*"
                multiple
                onChange={handleImagePreview}
                className="hidden"
              />
              <label htmlFor="images" className="cursor-pointer">
                <p>Drag & drop images here or click to browse</p>
                <p className="text-sm text-gray-500 mt-1">
                  (Minimum 1 image required)
                </p>
              </label>
            </div>
            {errors.images && (
              <span className="error-message">
                Please upload at least one image
              </span>
            )}

            {/* Image Previews */}
            {imagePreviews.length > 0 && (
              <div className="image-preview-container">
                {imagePreviews.map((img, index) => (
                  <div key={index} className="image-preview">
                    <img src={img.preview} alt={`Preview ${index + 1}`} />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="remove-image-btn"
                      aria-label="Remove image"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Creating Project..." : "Create Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectPage;
