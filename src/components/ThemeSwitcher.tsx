'use client';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React from 'react';

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <button
      onClick={handleToggleTheme}
      className="relative p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
      aria-label="Alternar tema"
    >
      <Sun className="h-5 w-5 text-primary rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 text-primary top-2 left-2 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Alternar tema</span>
    </button>
  );
}
