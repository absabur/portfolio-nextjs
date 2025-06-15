"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log(prefersDark)
    const defaultTheme = savedTheme || (prefersDark ? "dark" : "light");
    console.log(defaultTheme)

    setTheme(defaultTheme);
    document.documentElement.classList.toggle("light", defaultTheme === "light");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  };

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
            <FaSun />
          </span>
          <span className="theme-toggle-icon moon">
            <FaMoon />
          </span>
        </span>
      </div>
    </button>
  );
}
