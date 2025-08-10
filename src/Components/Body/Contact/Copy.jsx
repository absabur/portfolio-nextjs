"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Copy = ({ data, icon, label = "" }) => {
  const [copy, setCopy] = useState("");
  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy("");
      }, 2000);
      toast.success(`"${data}" copied!`);
    }
  }, [copy]);

  return (
    <>
      <div className="copy-component">
        <span className="icon">{icon}</span>
        <div className="links-body">
          {label && <span className="link-head">{label}</span>}
          <span
            title="Click to copy"
            className="copy-text"
            onClick={() => {
              navigator.clipboard.writeText(data);
              setCopy(data);
            }}
            style={{ cursor: "pointer" }}
          >
            {data}
          </span>
        </div>
      </div>
    </>
  );
};

export default Copy;
