"use client";
import { useEffect, useRef } from "react";

const SectionsHead = ({ section }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const { top } = ref.current.getBoundingClientRect();
        if (top <= 100) {
          sessionStorage.setItem("active",section)
        }
      }
    };


    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref]);
  return <span ref={ref} className={`${section}-section-scroll`}></span>;
};

export default SectionsHead;
