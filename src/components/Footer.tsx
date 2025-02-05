import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const categories = [
  { name: 'Tecnologia', href: '/tecnologia' },
  { name: 'Beleza', href: '/beleza' },
  { name: 'Moda', href: '/moda' },
  { name: 'Casa', href: '/casa' },
  { name: 'Fitness', href: '/fitness' },
  { name: 'Games', href: '/games' },
];

const company = [
  { name: 'Sobre', href: '/sobre' },
  { name: 'Política de Privacidade', href: '/privacidade' },
  { name: 'Termos de Uso', href: '/termos' },
  { name: 'Contato', href: '/contato' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <Link href="/" className="text-2xl font-bold text-primary">
              BestFinder
            </Link>
            <p className="text-sm text-muted-foreground">
              Sua fonte confiável de recomendações de produtos, reviews e comparações.
            </p>
          </div>

          {/* Categorias */}
          <div>
            <h3 className="font-semibold mb-4">Categorias</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
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

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.name}>
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
              Receba as melhores ofertas e novidades em primeira mão.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 text-sm rounded-md bg-muted border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 text-sm rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        {/* Rodapé Inferior */}
        <div className="mt-12 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 BestFinder. Todos os direitos reservados.
            </p>

            {/* Redes Sociais */}
            <div className="flex space-x-4">
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

          {/* Banner de Anúncio */}
          <div className="mt-8">
            <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              Espaço para Anúncio (728x90)
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
