'use client';
import React from 'react';
import { useTheme } from '../hooks/useTheme';

export function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 text-sm font-medium border rounded-md bg-primary text-white"
    >
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  );
}
