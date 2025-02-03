'use client';

import * as React from 'react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ChevronRight,
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad,
  Home,
  Car,
  Wrench,
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  subcategories: string[];
}

const categories: Category[] = [
  {
    id: 'smartphones',
    name: 'Smartphones',
    icon: <Smartphone className="w-4 h-4" />,
    subcategories: ['iPhone', 'Android', 'Feature Phones', 'Accessories'],
  },
  {
    id: 'computers',
    name: 'Computers',
    icon: <Laptop className="w-4 h-4" />,
    subcategories: ['Laptops', 'Desktops', 'Tablets', 'Monitors'],
  },
  {
    id: 'audio',
    name: 'Audio',
    icon: <Headphones className="w-4 h-4" />,
    subcategories: ['Headphones', 'Speakers', 'Microphones', 'Earbuds'],
  },
  {
    id: 'wearables',
    name: 'Wearables',
    icon: <Watch className="w-4 h-4" />,
    subcategories: ['Smartwatches', 'Fitness Trackers', 'Smart Glasses'],
  },
  {
    id: 'cameras',
    name: 'Cameras',
    icon: <Camera className="w-4 h-4" />,
    subcategories: ['DSLR', 'Mirrorless', 'Action Cameras', 'Drones'],
  },
  {
    id: 'gaming',
    name: 'Gaming',
    icon: <Gamepad className="w-4 h-4" />,
    subcategories: ['Consoles', 'PC Gaming', 'Accessories', 'Games'],
  },
  {
    id: 'smart-home',
    name: 'Smart Home',
    icon: <Home className="w-4 h-4" />,
    subcategories: ['Security', 'Lighting', 'Thermostats', 'Speakers'],
  },
  {
    id: 'automotive',
    name: 'Automotive',
    icon: <Car className="w-4 h-4" />,
    subcategories: ['Car Tech', 'GPS', 'Dash Cams', 'Audio'],
  },
  {
    id: 'accessories',
    name: 'Accessories',
    icon: <Wrench className="w-4 h-4" />,
    subcategories: ['Cases', 'Chargers', 'Cables', 'Storage'],
  },
];

export function CategoriesPopover() {
  const [openCategory, setOpenCategory] = React.useState<string | null>(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout>(null);

  function handleMouseEnter(categoryId: string) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenCategory(categoryId);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => {
      setOpenCategory(null);
      setIsOpen(false);
    }, 200);
  }

  function handleContentMouseEnter() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    <Popover
      open={isOpen}
      onOpenChange={(open: boolean) => setIsOpen(open)}
    >
      <PopoverTrigger
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={handleMouseLeave}
        className="text-muted hover:text-primary"
      >
        Categories
      </PopoverTrigger>
      <PopoverContent
        className="w-[500px] p-0 bg-white dark:bg-background-secondary border border-border shadow-lg"
        onMouseEnter={handleContentMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="flex bg-white dark:bg-background-secondary relative"
          onMouseEnter={handleContentMouseEnter}
        >
          <div className="w-1/2 border-r border-border">
            {categories.map((category) => (
              <div
                key={category.id}
                className="relative"
                onMouseEnter={() => handleMouseEnter(category.id)}
              >
                <a
                  href={`/category/${category.id}`}
                  className="flex items-center gap-2 p-3 text-sm transition-colors hover:bg-foreground hover:text-background-secondary"
                >
                  {category.icon}
                  <span>{category.name}</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
            ))}
          </div>
          {openCategory && (
            <div className="absolute left-1/2 top-0 w-1/2 bg-white dark:bg-background-secondary border-l border-border">
              {categories
                .find((category) => category.id === openCategory)
                ?.subcategories.map((subcategory) => (
                  <a
                    key={subcategory}
                    href={`/category/${openCategory}/${subcategory.toLowerCase()}`}
                    className="block p-3  text-sm transition-colors hover:bg-foreground hover:text-background-secondary"
                  >
                    {subcategory}
                  </a>
                ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
