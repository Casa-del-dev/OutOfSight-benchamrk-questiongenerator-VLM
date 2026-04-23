import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDark, setIsDark] = useState(() => {
    // Get initial theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme === "dark";
    }
    // Default to light mode
    return false;
  });

  // Update localStorage and document class whenever isDark changes
  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", theme);

    // Apply theme to document for global styling
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="sticky top-0 z-100 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <div className="text-xl font-semibold">
          <Link
            to="/"
            className="text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
          >
            Home
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border-2 border-gray-300 p-2 transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            {isDark ? "☀️" : "🌙"}
          </button>
        </div>
      </nav>
    </header>
  );
}
