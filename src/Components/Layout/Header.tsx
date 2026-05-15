import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoDark from "../../assets/Logo-sm-dark.png";
import logoLight from "../../assets/Logo-sm-light.png";
import { applyTheme, getResolvedIsDark } from "../../Lib/Theme";

export default function Header() {
  const [isDark, setIsDark] = useState(() => getResolvedIsDark());

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    applyTheme();

    window.dispatchEvent(new Event("theme-change"));
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <header className="sticky top-0 z-100 border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
      <nav className="mx-auto grid  grid-cols-[auto_1fr_auto] items-center px-4 py-4">
        <Link to="/" className="flex items-center">
          <img
            src={!isDark ? logoLight : logoDark}
            alt="OutOfSight logo"
            className="h-10 w-auto"
          />
        </Link>

        <div className="flex justify-around w-full text-lg font-semibold">
          <Link
            to="/questions"
            className="text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
          >
            View Question
          </Link>
          <Link
            to="/results"
            className="text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
          >
            Results
          </Link>
          <Link
            to="/team"
            className="text-gray-900 transition-colors duration-300 hover:text-blue-500 dark:text-gray-100 dark:hover:text-blue-400"
          >
            Team
          </Link>
        </div>

        <div className="flex justify-end items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="rounded-full border-2 border-gray-300 p-2 transition-all duration-300 hover:scale-110 hover:bg-gray-100 active:scale-95 dark:border-gray-600 dark:hover:bg-gray-800"
          >
            {isDark ? <Sun /> : <Moon />}
          </button>
        </div>
      </nav>
    </header>
  );
}
