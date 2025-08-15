"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css"; // adjust path if your styles folder is elsewhere

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const onSubmit = async (data) => {
    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Login failed");

      // Save token and redirect
      if (result.token) {
        localStorage.setItem("token", result.token);
      }
      router.push("/admin");
    } catch (error) {
      setServerError(error.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-wrap">
      <form onSubmit={handleSubmit(onSubmit)} className="login-card" noValidate>
        <h2 className="login-title">Admin Login</h2>

        {serverError && <div className="login-error">{serverError}</div>}

        <label className="login-label" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          className={`login-input ${errors.email ? "invalid" : ""}`}
          {...register("email", { required: "Email is required" })}
        />
        {errors.email && <div className="field-error">{errors.email.message}</div>}

        <label className="login-label" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          className={`login-input ${errors.password ? "invalid" : ""}`}
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && <div className="field-error">{errors.password.message}</div>}

        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
      <div className="login-footer">© {new Date().getFullYear()} Your Company</div>
    </div>
  );
}
