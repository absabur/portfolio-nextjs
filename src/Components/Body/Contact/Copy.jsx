"use client";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
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
          <CopyToClipboard text={data} onCopy={() => setCopy(data)}>
            <span title="Click to copy" className="copy-text">{data}</span>
          </CopyToClipboard>
        </div>
      </div>
    </>
  );
};

export default Copy;
