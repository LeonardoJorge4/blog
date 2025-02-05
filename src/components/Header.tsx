'use client';

import Link from 'next/link';
import { Search, Heart, Menu } from 'lucide-react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useState } from 'react';

const navigation = [
  { name: 'Tecnologia', href: '/tecnologia' },
  { name: 'Beleza', href: '/beleza' },
  { name: 'Moda', href: '/moda' },
  { name: 'Casa', href: '/casa' },
  { name: 'Fitness', href: '/fitness' },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">BestFinder</span>
          </Link>

          {/* Barra de Busca - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            </div>
          </div>

          {/* Navegação - Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Ações */}
          <div className="flex items-center space-x-4">
            <Link
              href="/favoritos"
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Favoritos"
            >
              <Heart className="h-5 w-5" />
            </Link>
            
            <ThemeSwitcher />

            <Link
              href="/login"
              className="hidden md:block px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Entrar
            </Link>

            {/* Menu Mobile */}
            <button
              onClick={handleToggleMenu}
              className="lg:hidden p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Barra de Busca - Mobile */}
        <div className="md:hidden py-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full h-10 pl-10 pr-4 rounded-full bg-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
          </div>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/login"
                className="md:hidden text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Entrar
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
