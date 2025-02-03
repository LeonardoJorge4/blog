'use client';
import { useState } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Menu, X, Search } from 'lucide-react';
import { CategoriesPopover } from './CategoriesPopover';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    // Implementar lógica de busca aqui
    console.log('Searching for:', searchQuery);
  }

  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
  }

  function handleMenuToggle() {
    setIsMenuOpen(!isMenuOpen);
  }

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
            Tech
          </a>
          <a
            href="#"
            className="text-muted hover:text-primary"
          >
            Beauty
          </a>
          <a
            href="#"
            className="text-muted hover:text-primary"
          >
            Deals
          </a>
          <CategoriesPopover />
        </nav>

        {/* Botão de Alternância de Tema */}
        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          {/* Botão Menu Mobile */}
          <button
            onClick={handleMenuToggle}
            className="md:hidden p-2 rounded-md border border-border bg-background-secondary"
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <form
            onSubmit={handleSearch}
            className="hidden sm:flex items-center relative"
          >
            <input
              type="search"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="px-4 py-2 pr-10 rounded-md border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              aria-label="Campo de busca"
            />
            <button
              type="submit"
              className="absolute right-3 text-muted hover:text-primary"
              aria-label="Buscar"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>
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
