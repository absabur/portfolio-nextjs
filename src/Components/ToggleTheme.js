"use client";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { IoSunny } from "react-icons/io5";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  const [mounted, setMounted] = useState(false); // track if mounted

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const defaultTheme = savedTheme ? savedTheme : prefersDark ? "dark" : "light";

    setTheme(defaultTheme);

    if (defaultTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }

    setMounted(true); // now we can safely render
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  if (!mounted) return null; // don't render UI until mounted & theme set

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span className="theme-toggle-sr">Toggle dark/light mode</span>
      <div className="theme-toggle-track">
        <span className="theme-toggle-thumb">
          <span className="theme-toggle-icon sun">
            <IoSunny fontSize={20} />
          </span>
          <span className="theme-toggle-icon moon">
            <FaMoon />
          </span>
        </span>
      </div>
    </button>
  );
}
