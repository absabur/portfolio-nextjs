"use client";
import { useRouter } from "next/navigation";
import { FaTimes } from "react-icons/fa";

export default function CloseButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="ic-closeButton">
      <FaTimes />
    </button>
  );
}
