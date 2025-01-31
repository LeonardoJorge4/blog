'use client';
import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background-secondary border-b border-border p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold">TechRecommends</h1>

        {/* Menu Desktop */}
        <nav className="hidden md:flex gap-4">
          <a
            href="#"
            className="text-muted hover:text-primary"
          >
            Home
          </a>
          <a
            href="#"
            className="text-muted hover:text-primary"
          >
            Reviews
          </a>
          <a
            href="#"
            className="text-muted hover:text-primary"
          >
            Categorias
          </a>
        </nav>

        {/* Botão de Alternância de Tema */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          {/* Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md border border-border bg-background-secondary"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background-secondary border-t border-border p-4 absolute top-[60px] left-0 w-full z-10">
          <a
            href="#"
            className="block text-muted hover:text-primary p-2"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-muted hover:text-primary p-2"
          >
            Reviews
          </a>
          <a
            href="#"
            className="block text-muted hover:text-primary p-2"
          >
            Categorias
          </a>
        </nav>
      )}
    </header>
  );
}
