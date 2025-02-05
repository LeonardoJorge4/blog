'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  affiliateLink: string;
}

export function ProductCard({
  id,
  title,
  description,
  price,
  rating,
  image,
  affiliateLink,
}: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleToggleFavorite() {
    setIsFavorite(!isFavorite);
  }

  return (
    <div className="group relative bg-card rounded-lg border p-4 transition-all hover:shadow-lg">
      {/* Badge de Melhor Escolha */}
      <div className="absolute top-2 left-2 z-10">
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
          Top Pick
        </span>
      </div>

      {/* Botão Favoritar */}
      <button
        onClick={handleToggleFavorite}
        className="absolute top-2 right-2 z-10 p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
        aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
      >
        <Heart
          className={`h-4 w-4 ${
            isFavorite ? 'fill-primary text-primary' : 'text-muted-foreground'
          }`}
        />
      </button>

      {/* Imagem do Produto */}
      <Link href={`/produto/${id}`} className="block aspect-square overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>

      {/* Informações do Produto */}
      <div className="space-y-2 pt-4">
        <Link href={`/produto/${id}`}>
          <h3 className="font-semibold line-clamp-2 hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>

        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>

        {/* Avaliação */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${
                  i < rating ? 'text-secondary' : 'text-muted'
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">({rating.toFixed(1)})</span>
        </div>

        {/* Preço e CTA */}
        <div className="flex items-center justify-between pt-2">
          <div className="text-lg font-semibold">${price.toFixed(2)}</div>
          <a
            href={affiliateLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-sm rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Ver Oferta
          </a>
        </div>
      </div>
    </div>
  );
} 