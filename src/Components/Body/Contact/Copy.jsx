"use client"
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { MdVerified } from "react-icons/md";

const Copy = ({ data, icon, label = "" }) => {
  const [copy, setCopy] = useState("");
  useEffect(() => {
    if (copy) {
      setTimeout(() => {
        setCopy("");
      }, 2000);
    }
  }, [copy]);

  return (
    <div className="copy-component">
      <span className="icon">{icon}</span>
      <div className="links-body">
        {label && <span className="link-head">{label}</span>}
        <CopyToClipboard text={data} onCopy={() => setCopy(data)}>
          <span
            className="copy-text"
          >
            {data}
          </span>
        </CopyToClipboard>
      </div>
      {copy === data && (
        <span className="copied">
          Copied! <MdVerified />
        </span>
      )}
    </div>
  );
};

export default Copy;
