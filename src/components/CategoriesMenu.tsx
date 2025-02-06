'use client';

import * as React from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const categories = [
  {
    title: 'Tecnologia',
    href: '/tecnologia',
    featured: true,
    description: 'Novidades e reviews de produtos tecnológicos',
    subcategories: [
      {
        title: 'Smartphones',
        items: [
          { title: 'Apple', href: '/tecnologia/smartphones/apple' },
          { title: 'Samsung', href: '/tecnologia/smartphones/samsung' },
          { title: 'Xiaomi', href: '/tecnologia/smartphones/xiaomi' },
          { title: 'Motorola', href: '/tecnologia/smartphones/motorola' },
        ],
      },
      {
        title: 'Computadores',
        items: [
          { title: 'Notebooks', href: '/tecnologia/computadores/notebooks' },
          { title: 'Desktop', href: '/tecnologia/computadores/desktop' },
          { title: 'Tablets', href: '/tecnologia/computadores/tablets' },
          { title: 'Monitores', href: '/tecnologia/computadores/monitores' },
        ],
      },
      {
        title: 'Acessórios',
        items: [
          { title: 'Fones', href: '/tecnologia/acessorios/fones' },
          {
            title: 'Smartwatches',
            href: '/tecnologia/acessorios/smartwatches',
          },
          { title: 'Teclados', href: '/tecnologia/acessorios/teclados' },
          { title: 'Mouses', href: '/tecnologia/acessorios/mouses' },
        ],
      },
    ],
  },
  {
    title: 'Casa',
    href: '/casa',
    featured: true,
    description: 'Produtos e dicas para sua casa',
    subcategories: [
      {
        title: 'Decoração',
        items: [
          { title: 'Sala', href: '/casa/decoracao/sala' },
          { title: 'Quarto', href: '/casa/decoracao/quarto' },
          { title: 'Cozinha', href: '/casa/decoracao/cozinha' },
          { title: 'Banheiro', href: '/casa/decoracao/banheiro' },
        ],
      },
      {
        title: 'Eletrodomésticos',
        items: [
          { title: 'Geladeiras', href: '/casa/eletrodomesticos/geladeiras' },
          { title: 'Fogões', href: '/casa/eletrodomesticos/fogoes' },
          { title: 'Lavadoras', href: '/casa/eletrodomesticos/lavadoras' },
          { title: 'Micro-ondas', href: '/casa/eletrodomesticos/micro-ondas' },
        ],
      },
      {
        title: 'Casa Inteligente',
        items: [
          { title: 'Iluminação', href: '/casa/smart/iluminacao' },
          { title: 'Segurança', href: '/casa/smart/seguranca' },
          { title: 'Assistentes', href: '/casa/smart/assistentes' },
          { title: 'Automação', href: '/casa/smart/automacao' },
        ],
      },
    ],
  },
  {
    title: 'Moda',
    href: '/moda',
    featured: true,
    description: 'Tendências e dicas de moda',
    subcategories: [
      {
        title: 'Feminino',
        items: [
          { title: 'Roupas', href: '/moda/feminino/roupas' },
          { title: 'Calçados', href: '/moda/feminino/calcados' },
          { title: 'Acessórios', href: '/moda/feminino/acessorios' },
          { title: 'Bolsas', href: '/moda/feminino/bolsas' },
        ],
      },
      {
        title: 'Masculino',
        items: [
          { title: 'Roupas', href: '/moda/masculino/roupas' },
          { title: 'Calçados', href: '/moda/masculino/calcados' },
          { title: 'Acessórios', href: '/moda/masculino/acessorios' },
          { title: 'Relógios', href: '/moda/masculino/relogios' },
        ],
      },
      {
        title: 'Esportes',
        items: [
          { title: 'Academia', href: '/moda/esportes/academia' },
          { title: 'Corrida', href: '/moda/esportes/corrida' },
          { title: 'Futebol', href: '/moda/esportes/futebol' },
          { title: 'Natação', href: '/moda/esportes/natacao' },
        ],
      },
    ],
  },
  {
    title: 'Beleza',
    href: '/beleza',
    featured: true,
    description: 'Produtos de beleza e cuidados pessoais',
    subcategories: [
      {
        title: 'Maquiagem',
        items: [
          { title: 'Rosto', href: '/beleza/maquiagem/rosto' },
          { title: 'Olhos', href: '/beleza/maquiagem/olhos' },
          { title: 'Lábios', href: '/beleza/maquiagem/labios' },
          { title: 'Pincéis', href: '/beleza/maquiagem/pinceis' },
        ],
      },
      {
        title: 'Skincare',
        items: [
          { title: 'Limpeza', href: '/beleza/skincare/limpeza' },
          { title: 'Hidratação', href: '/beleza/skincare/hidratacao' },
          { title: 'Proteção Solar', href: '/beleza/skincare/protecao-solar' },
          { title: 'Tratamentos', href: '/beleza/skincare/tratamentos' },
        ],
      },
      {
        title: 'Cabelos',
        items: [
          { title: 'Shampoo', href: '/beleza/cabelos/shampoo' },
          { title: 'Tratamento', href: '/beleza/cabelos/tratamento' },
          { title: 'Finalizadores', href: '/beleza/cabelos/finalizadores' },
          { title: 'Coloração', href: '/beleza/cabelos/coloracao' },
        ],
      },
    ],
  },
  {
    title: 'Eletrônicos',
    href: '/eletronicos',
    featured: false,
    description: 'Eletrônicos e gadgets',
    subcategories: [
      // ... subcategorias
    ],
  },
  {
    title: 'Livros',
    href: '/livros',
    featured: false,
    description: 'Livros e e-books',
    subcategories: [
      // ... subcategorias
    ],
  },
];

export function CategoriesMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            Categories
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-[200px_1fr] w-[450px] gap-0 p-4">
              {/* Lista de Categorias */}
              <ul className="space-y-2">
                {categories.map((category) => (
                  <ListItem
                    key={category.href}
                    title={category.title}
                    href={category.href}
                    className={cn(
                      'hover:bg-muted rounded-lg transition-colors',
                      !category.featured && 'text-muted-foreground'
                    )}
                    onMouseEnter={() => {
                      const content = document.getElementById(
                        `subcategories-${category.href}`
                      );
                      if (content) {
                        document
                          .querySelectorAll('[data-subcategories]')
                          .forEach((el) => {
                            el.classList.add('hidden');
                          });
                        content.classList.remove('hidden');
                      }
                    }}
                  />
                ))}
              </ul>

              {/* Subcategorias */}
              <div className="border-l pl-6">
                {categories.map((category) => (
                  <div
                    key={category.href}
                    id={`subcategories-${category.href}`}
                    data-subcategories
                    className={cn(
                      'space-y-6',
                      category.href !== categories[0].href && 'hidden'
                    )}
                  >
                    {category.subcategories.map((subcategory) => (
                      <div key={subcategory.title}>
                        <h4 className="font-medium mb-2 text-sm text-muted-foreground">
                          {subcategory.title}
                        </h4>
                        <ul className="space-y-2">
                          {subcategory.items.map((item) => (
                            <ListItem
                              key={item.href}
                              title={item.title}
                              href={item.href}
                            />
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & { title: string }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
