"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check for saved theme preference or use system preference
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme")
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

      return savedTheme === "dark" || (!savedTheme && prefersDark)
    }
    return false
  })

  useEffect(() => {
    // Update the document class when theme changes
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 dark:focus:ring-offset-gray-900 transition-colors"
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  )
}

export default ThemeToggle

