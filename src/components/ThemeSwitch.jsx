"use client";

import { appConfig } from '@/config/app.config';
import { useEffect, useState } from 'react';

export function ThemeSwitch() {
  const [currentTheme, setCurrentTheme] = useState('light');

  // Simple theme list
  const themes = appConfig.getThemeNames()

  useEffect(() => {
    // Get current theme on load
    const savedTheme = localStorage.getItem('theme') || 'light';
    setCurrentTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const handleThemeChange = (themeName) => {
    setCurrentTheme(themeName);
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
  };

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-sm">
        <div className="flex-shrink-0 w-4 h-4 grid grid-cols-2 gap-0.5 rounded border border-base-content/20">
          <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-neutral"></div>
        </div>
      </div>
      <div className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-80 overflow-y-auto">
        <div className="grid grid-cols-1 gap-1">
          {themes.map((themeName) => (
            <button
              key={themeName}
              className="btn btn-sm btn-block btn-ghost justify-start capitalize"
              onClick={() => handleThemeChange(themeName)}
              data-theme={themeName}
            >
              <svg
                className={`w-4 h-4 ${currentTheme === themeName ? 'visible' : 'invisible'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>

              {/* Theme preview colors */}
              <div className="flex-shrink-0 w-4 h-4 grid grid-cols-2 gap-0.5 rounded border border-base-content/20">
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-secondary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-neutral"></div>
              </div>

              {themeName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}