'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AdBanner } from './AdBanner';

export function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* Botão para abrir Sidebar no Mobile */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="md:hidden p-2 fixed top-16 left-4 z-20 bg-primary text-white rounded-md"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar Mobile e Desktop */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-background-secondary p-4 border-r border-border 
          transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
          transition-transform md:translate-x-0`}
      >
        {/* Botão de Fechar no Mobile */}
        <div className="flex justify-between items-center md:hidden">
          <h2 className="text-xl font-bold">Categorias</h2>
          <button onClick={() => setIsSidebarOpen(false)}>
            <X className="w-6 h-6 text-muted" />
          </button>
        </div>

        {/* Lista de Categorias */}
        <ul className="mt-4 space-y-2">
          <li>
            <a
              href="#"
              className="text-muted hover:text-primary"
            >
              Smartphones
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-muted hover:text-primary"
            >
              Notebooks
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-muted hover:text-primary"
            >
              Periféricos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-muted hover:text-primary"
            >
              Eletrodomésticos
            </a>
          </li>
        </ul>

        {/* Ad Slot na Sidebar */}
        <div className="mt-6">
          <p className="text-sm text-muted mb-2">Patrocinado</p>
          <AdBanner adSlot="sidebar" />
        </div>
      </aside>
    </>
  );
}
