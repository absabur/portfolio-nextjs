"use client";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { toast, Toaster } from "sonner";

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
    <div className="copy-component">
      {copy == data && <Toaster richColors position="top-right" />}
      <span className="icon">{icon}</span>
      <div className="links-body">
        {label && <span className="link-head">{label}</span>}
        <CopyToClipboard text={data} onCopy={() => setCopy(data)}>
          <span className="copy-text">{data}</span>
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Copy;
