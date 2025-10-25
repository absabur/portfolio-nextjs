"use client";
import React from "react";
import { useAuth } from "./AuthContextProvider";

const ProtectedButton = ({ children }) => {
  const { admin, loading } = useAuth();

  if (loading) return null; // or show spinner
  if (!admin) return null;

  return <button onClick={(e) => e.stopPropagation()}>{children}</button>;
};

export default ProtectedButton;
