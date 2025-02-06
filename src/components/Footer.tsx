'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { useLocale } from '@/contexts/LocaleContext';
import { getTranslation } from '@/locales';

export function Footer() {
  const { locale } = useLocale();
  const t = (path: string) => getTranslation(locale, path);

  const categories = [
    { name: t('categories.tech.title'), href: '/tech' },
    { name: t('categories.beauty.title'), href: '/beauty' },
    { name: t('categories.fashion.title'), href: '/fashion' },
    { name: t('categories.home.title'), href: '/home' },
    { name: t('categories.fitness.title'), href: '/fitness' },
  ];

  const company = [
    { name: t('footer.privacyPolicy'), href: '/privacy' },
    { name: t('footer.termsOfUse'), href: '/terms' },
  ];

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-primary"
            >
              BestFinder
            </Link>
            <p className="text-sm text-muted-foreground">
              {t('footer.about.description')}
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.categories')}</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.href}>
                  <Link
                    href={category.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.company')}</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get the best deals and news first.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 text-sm rounded-md bg-muted border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social and Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.followUs')}</h3>
            <div className="flex gap-2">
              <a
                href="#"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 BestFinder. All rights reserved.
            </p>
          </div>

          {/* Ad Banner */}
          <div className="mt-8">
            <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              {t('post.advertisement')} (728x90)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
