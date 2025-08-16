"use client";
import { FaTimes } from "react-icons/fa";

export default function CloseButton({ setIsOpen }) {
  return (
    <button onClick={() => setIsOpen(false)} className="ic-closeButton">
      <FaTimes />
    </button>
  );
}
