"use client";
import { useRouter } from "next/navigation";
import { IoMdArrowBack } from "react-icons/io";

export default function CloseButton() {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="closeButton">
      <IoMdArrowBack /> <span>Back</span>
    </button>
  );
}
