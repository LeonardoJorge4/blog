'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { type CarouselApi } from '@/components/ui/carousel';

const slides = [
  {
    id: 1,
    title: 'Os Melhores Gadgets de 2024',
    description: 'Descubra as últimas novidades em tecnologia',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f',
    link: '/tecnologia',
    cta: 'Explorar Tecnologia',
  },
  {
    id: 2,
    title: 'Guia de Beleza Premium',
    description: 'Produtos de beleza mais bem avaliados',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9',
    link: '/beleza',
    cta: 'Ver Produtos',
  },
  {
    id: 3,
    title: 'Moda Sustentável',
    description: 'As melhores marcas eco-friendly',
    image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03',
    link: '/moda',
    cta: 'Descobrir Mais',
  },
];

export function HeroSection() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative bg-background">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{
          loop: true,
          align: 'start',
        }}
      >
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[400px] md:h-[500px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />

                <div className="container relative mx-auto px-4 h-full flex items-center">
                  <div className="max-w-2xl pl-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                      {slide.title}
                    </h1>
                    <p className="text-lg md:text-xl text-white/80 mb-8">
                      {slide.description}
                    </p>
                    <Link
                      href={slide.link}
                      className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors w-fit"
                    >
                      {slide.cta}
                    </Link>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === current
                  ? 'bg-primary'
                  : 'bg-primary/20 hover:bg-primary/40'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>

        <CarouselPrevious className="left-4 z-20" />
        <CarouselNext className="right-4 z-20" />
      </Carousel>

      {/* Banner de anúncio */}
      <div className="container mx-auto px-4 py-4">
        <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
          Espaço para Anúncio (728x90)
        </div>
      </div>
    </section>
  );
}
