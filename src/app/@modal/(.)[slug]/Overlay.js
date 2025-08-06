"use client";

import { useRouter } from "next/navigation";

const Overlay = ({ children }) => {
  const router = useRouter();
  return (
    <div onClick={() => router.back()} className={`ic-modalOverlay`}>
      <div className={`ic-modalContent`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
