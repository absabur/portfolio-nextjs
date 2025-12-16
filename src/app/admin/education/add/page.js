"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { clientCloudinary } from "@/config/cloudinaryClient";
import { revalidate } from "../action";
import { useRouter } from "next/navigation";
import "../css/education.css"

const AddEducationPage = () => {
  const router = useRouter();
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
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
    const toastId = toast.loading("Creating education...");
    
    try {
      let icon = "";
      if (imageFile) { 
        const uploaded = await clientCloudinary(imageFile, "education"); 
        icon = uploaded.url; 
      }
      
      const body = { 
        ...data, 
        icon, 
        // Ensure checkbox value is treated as a boolean
        is_active: data.is_active === true 
      };
      
      const res = await fetch("/api/education", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(body) 
      });
      
      if (!res.ok) throw new Error("Failed to create education");
      
      await revalidate(); 
      toast.success("Education record created successfully!", { id: toastId }); 
      
      reset(); 
      removeImage(); 
      router.push("/admin/education");
      
    } catch (err) { 
      console.error(err); 
      toast.error(err.message || "Error creating education record", { id: toastId }); 
      
    } finally { 
      setLoading(false); 
    }
  };

  return (
    <div className="edu-add-container">
      <h1 className="edu-add-title">Add New Education Record</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="edu-add-form">
        
        {/* Degree & Institution */}
        <div className="edu-add-group-grid">
            <div className="edu-add-group">
                <label className="edu-add-label">Degree/Qualification *</label>
                <input 
                    {...register("degree", { required: "Degree is required" })} 
                    className="edu-add-input" 
                />
                {errors.degree && (
                    <span className="edu-add-error-message">{errors.degree.message}</span>
                )}
            </div>
            <div className="edu-add-group">
                <label className="edu-add-label">Institution/School</label>
                <input {...register("institution")} className="edu-add-input" />
            </div>
        </div>

        {/* Duration & Color */}
        <div className="edu-add-group-grid">
            <div className="edu-add-group">
                <label className="edu-add-label">Duration (e.g., 2018 - 2022)</label>
                <input {...register("duration")} className="edu-add-input" />
            </div>
            <div className="edu-add-group">
                <label className="edu-add-label">Color (Hex code for timeline/display)</label>
                <input 
                    {...register("color")} 
                    className="edu-add-input" 
                    placeholder="#4f46e5" 
                />
            </div>
        </div>

        <div className="edu-add-group">
            <label className="edu-add-label">Description / Key Notes</label>
            <textarea {...register("description")} className="edu-add-textarea" rows="4" />
        </div>
        
        {/* Order and Active Checkbox */}
        <div className="edu-add-group-grid edu-add-group-grid-meta">
            <div className="edu-add-group">
                <label htmlFor="order" className="edu-add-label">Order (Lower number appears first)</label>
                <input 
                    id="order" 
                    type="number" 
                    {...register("order", { valueAsNumber: true })} 
                    className="edu-add-input" 
                    placeholder="0" 
                    defaultValue={0}
                />
            </div>
            <div className="edu-add-group edu-add-checkbox-group">
                <label htmlFor="is_active" className="edu-add-label-checkbox">Active (Display on site)</label>
                <input 
                    id="is_active" 
                    type="checkbox" 
                    {...register("is_active")} 
                    className="edu-add-input-checkbox" 
                />
            </div>
        </div>
        
        {/* Icon Upload */}
        <div className="edu-add-group edu-add-group-image">
            <label className="edu-add-label">Institution Icon (optional)</label>
            <input 
                type="file" 
                accept="image/*" 
                onChange={handleImagePreview} 
                className="edu-add-input-file" 
            />
            {imagePreview && (
                <div className="edu-add-image-preview-wrapper">
                    <img src={imagePreview} alt="Icon Preview" className="edu-add-image-preview" />
                    <button 
                        type="button" 
                        onClick={removeImage} 
                        className="edu-add-remove-image-btn"
                    >
                        ×
                    </button>
                </div>
            )}
        </div>

        <button type="submit" disabled={loading} className="edu-add-submit-btn">
            {loading ? "Creating..." : "Create Education"}
        </button>
      </form>
    </div>
  );
};

export default AddEducationPage;