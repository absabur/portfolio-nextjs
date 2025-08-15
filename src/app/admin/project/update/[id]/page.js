"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import "../../add/addProject.css";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { useParams } from "next/navigation";
import { revalidate } from "../../action";
import { useRouter } from "next/router";

const UpdateProjectPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [technologies, setTechnologies] = useState([]);
  const [techInput, setTechInput] = useState([]);

  // Fetch existing project data
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await fetch(`/api/projects/${id}`);
        if (!res.ok) throw new Error("Failed to fetch project");
        const { project } = await res.json();
        // Prefill form
        reset({
          title: project.title || "",
          description: project.description || "",
          liveUrl: project.liveUrl || "",
          frontendCodeUrl: project.frontendCodeUrl || "",
          backendCodeUrl: project.backendCodeUrl || "",
          fullstackCodeUrl: project.fullstackCodeUrl || "",
          user: project.user || "",
          password: project.password || "",
          youtubeLink: project.youtubeLink || "",
        });

        setTechnologies(project.technologies || []);
        setImagePreviews(
          (project.images || []).map((img) => ({
            preview: img.url,
            file: null, // existing images won't have file objects
            public_id: img.public_id,
          }))
        );
      } catch (err) {
        console.error(err);
        toast.error(err.message);
      }
    };

    if (id) fetchProject();
  }, [id, reset]);

  // Handle tech add/remove
  const addTechnology = () => {
    if (techInput.trim() && !technologies.includes(techInput.trim())) {
      setTechnologies((prev) => [...prev, techInput.trim()]);
      setTechInput("");
    }
  };
  const removeTechnology = (tech) => {
    setTechnologies((prev) => prev.filter((t) => t !== tech));
  };

  // Handle images
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
      if (newPreviews[index].file) {
        URL.revokeObjectURL(newPreviews[index].preview);
      }
      newPreviews.splice(index, 1);
      return newPreviews;
    });
  };

  const onSubmit = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Updating project...");

    try {
      const formData = {
        ...data,
        technologies,
        images: [],
      };

      // Process images
      for (let i = 0; i < imagePreviews.length; i++) {
        if (imagePreviews[i].file) {
          // new image → upload to Cloudinary
          const uploadedImage = await clientCloudinary(
            imagePreviews[i].file,
            "gallery"
          );
          formData.images.push(uploadedImage);
        } else {
          // existing image → keep as is
          formData.images.push({
            public_id: imagePreviews[i].public_id,
            url: imagePreviews[i].preview,
          });
        }
      }

      if (formData.images.length === 0) {
        toast.error("Please upload at least one image", { id: toastId });
        setLoading(false);
        return;
      }

      // Send update request
      const res = await fetch(`/api/projects/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to update project");
      const result = await res.json();
      await revalidate(result.data.title.replace(/ /g, "__"));
      toast.success("Project updated successfully!", { id: toastId });
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
        <h1 className="add-project-title">Update Project</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="project-form">
          {/* Title */}
          <div className="form-group">
            <label className="form-label">Title *</label>
            <input
              {...register("title", { required: "Title is required" })}
              className="form-input"
            />
            {errors.title && (
              <span className="error-message">{errors.title.message}</span>
            )}
          </div>

          {/* Description */}
          <div className="form-group">
            <label className="form-label">Description</label>
            <textarea {...register("description")} className="form-textarea" />
          </div>

          {/* Technologies */}
          <div className="form-group">
            <label className="form-label">Technologies</label>
            <div className="flex gap-2">
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                className="form-input flex-1"
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
              <label className="form-label">Live URL *</label>
              <input
                type="url"
                {...register("liveUrl", { required: "Live URL is required" })}
                className="form-input"
              />
              {errors.liveUrl && (
                <span className="error-message">{errors.liveUrl.message}</span>
              )}
            </div>

            <div className="form-group">
              <label className="form-label">Frontend Code URL</label>
              <input
                type="url"
                {...register("frontendCodeUrl")}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Backend Code URL</label>
              <input
                type="url"
                {...register("backendCodeUrl")}
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Fullstack Code URL</label>
              <input
                type="url"
                {...register("fullstackCodeUrl")}
                className="form-input"
              />
            </div>
          </div>

          {/* Credentials */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label className="form-label">Demo User</label>
              <input type="text" {...register("user")} className="form-input" />
            </div>
            <div className="form-group">
              <label className="form-label">Demo Password</label>
              <input
                type="text"
                {...register("password")}
                className="form-input"
              />
            </div>
          </div>

          {/* YouTube Link */}
          <div className="form-group">
            <label className="form-label">YouTube Link</label>
            <input
              type="url"
              {...register("youtubeLink")}
              className="form-input"
            />
          </div>

          {/* Image Upload */}
          <div className="form-group">
            <label className="form-label">Project Images *</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImagePreview}
              className="form-input"
            />
            <div className="image-preview-container">
              {imagePreviews.map((img, index) => (
                <div key={index} className="image-preview">
                  <img src={img.preview} alt={`Preview ${index + 1}`} />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="remove-image-btn"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Updating..." : "Update Project"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProjectPage;
