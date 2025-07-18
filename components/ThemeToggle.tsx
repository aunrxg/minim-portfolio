"use client";

import { useState } from "react";

export default function ThemeToggle({ className }: { className: string }) {

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
  if (typeof window !== 'undefined') {
    return (localStorage.getItem('theme') as 'light' | 'dark') ?? 'light';
  }
  return 'light';
});

  const applyTheme = (newTheme: 'light' | 'dark') => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);

    const blogContent = document.getElementById('blog-content');
    if(blogContent) {
      blogContent.classList.remove('prose-dark', 'prose-light');
      blogContent.classList.add(newTheme === 'dark' ? 'prose-dark' : 'prose-light');
    }
  }

  const toggleTheme = () => {
    console.log("Current Theme: ", theme);
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    applyTheme(newTheme);
    console.log("Theme changed to :", newTheme);
  }
  return (
    <button
      className={`theme-toggle hover:cursor-pointer ${className}`}
      type="button"
      title="Toggle theme"
      aria-label="Toggle theme"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        width="1em"
        height="1em"
        className="theme-toggle__dark-inner"
        fill="currentColor"
        viewBox="0 0 32 32"
      >
        <path d="M16 9c3.9 0 7 3.1 7 7s-3.1 7-7 7" />
        <path d="M16 .5C7.4.5.5 7.4.5 16S7.4 31.5 16 31.5 31.5 24.6 31.5 16 24.6.5 16 .5zm0 28.1V23c-3.9 0-7-3.1-7-7s3.1-7 7-7V3.4C23 3.4 28.6 9 28.6 16S23 28.6 16 28.6z" />
      </svg>
    </button>
  )
}