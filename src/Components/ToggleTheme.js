"use client";
import React, { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    toggleTheme(!darkMode);
  };

  const toggleTheme = (isDark) => {
    const root = document.documentElement;
    if (isDark) {
      root.style.setProperty("--color1", "#00ffcc");
      root.style.setProperty("--color2", "#c7daff");
      root.style.setProperty("--color3", "#001129");
      root.style.setProperty("--color4", "#ffffff");
      root.style.setProperty("--color5", "#3498db");
    } else {
      root.style.setProperty("--color1", "#222831");
      root.style.setProperty("--color2", "#00021a");
      root.style.setProperty("--color3", "#ffffff");
      root.style.setProperty("--color4", "#000000");
      root.style.setProperty("--color5", "#6fcf97");
    }
  };

  return <button onClick={handleToggle}>Toggle Theme</button>;
}

export default ThemeToggle;
