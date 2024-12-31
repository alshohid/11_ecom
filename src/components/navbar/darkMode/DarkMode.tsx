"use client";

import LightButton from "../../../../public/images/website/light-mode-button.png";
import DarkButton from "../../../../public/images/website/dark-mode-button.png";
import { useEffect, useState } from "react";

const DarkMode = () => {
    const [theme, setTheme] = useState<string>("light");
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
      setIsMounted(true);
    }
  }, []);

  // Update document class and localStorage when theme changes
  useEffect(() => {
    if (isMounted) {
      const rootElement = document.documentElement;
      const isDarkMode = theme === "dark";
      rootElement.classList.toggle("dark", isDarkMode);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  const toggleTheme = () => setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="relative">
      <img
        onClick={toggleTheme}
        src={LightButton.src}
        alt="Switch to dark mode"
        className={`w-12 cursor-pointer absolute transition-opacity duration-300 ${
          theme === "dark" ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      />
      <img
        onClick={toggleTheme}
        src={DarkButton.src}
        alt="Switch to light mode"
        className={`w-12 cursor-pointer transition-opacity duration-300 ${
          theme === "dark" ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
};

export default DarkMode;
