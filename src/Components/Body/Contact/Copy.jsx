"use client";
import { useState } from "react";
import { toast } from "sonner";

const Copy = ({ data, icon, label = "" }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data);
      setCopied(true);
      toast.success(`"${data}" copied!`);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast.error("Failed to copy!");
      console.error("Copy failed:", err);
    }
  };

  return (
    <div className="copy-component" onClick={handleCopy} role="button" tabIndex={0}>
      <span className="icon">{icon}</span>
      <div className="links-body">
        {label && <span className="link-head">{label}</span>}
        <span title="Click to copy" className="copy-text">{data}</span>
      </div>
    </div>
  );
};

export default Copy;
