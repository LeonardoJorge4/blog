'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PostAuthor } from '@/components/PostAuthor';
import { PostContent } from '@/components/PostContent';
import { RelatedPosts } from '@/components/RelatedPosts';
import Image from 'next/image';

// Dados mockados para exemplo
const post = {
  title: 'Os 10 Melhores Smartphones de 2024',
  excerpt:
    'Confira nossa seleção dos melhores smartphones do ano, com análises detalhadas e comparativos de preço.',
  coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
  content: [
    {
      type: 'paragraph',
      content:
        'O mercado de smartphones está cada vez mais competitivo, com fabricantes lançando dispositivos impressionantes a cada ano. Neste artigo, vamos analisar os 10 melhores smartphones disponíveis em 2024, considerando diversos fatores como desempenho, câmera, bateria e custo-benefício.',
    },
    {
      type: 'heading',
      level: 1,
      content: '1. iPhone 15 Pro Max',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
      alt: 'iPhone 15 Pro Max',
      caption:
        'O novo iPhone 15 Pro Max traz melhorias significativas na câmera e design em titânio',
    },
    {
      type: 'paragraph',
      content:
        'O iPhone 15 Pro Max representa o ápice da tecnologia móvel da Apple. Com seu novo chip A17 Pro e sistema de câmera revolucionário, ele estabelece novos padrões para smartphones premium.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Especificações Técnicas',
    },
    {
      type: 'table',
      data: [
        { caracteristica: 'Especificação', detalhe: 'Descrição' },
        { caracteristica: 'Tela', detalhe: '6.7" Super Retina XDR OLED' },
        { caracteristica: 'Processador', detalhe: 'A17 Pro' },
        { caracteristica: 'RAM', detalhe: '8GB' },
        { caracteristica: 'Armazenamento', detalhe: '256GB/512GB/1TB' },
        { caracteristica: 'Câmera Principal', detalhe: '48MP + 12MP + 12MP' },
        { caracteristica: 'Bateria', detalhe: '4.422 mAh' },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Destaques',
    },
    {
      type: 'list',
      items: [
        'Design premium em titânio',
        'Câmera principal de 48MP com zoom óptico de 5x',
        'Chip A17 Pro com desempenho excepcional',
        'Tela ProMotion de 120Hz',
        'Suporte a USB-C',
      ],
    },
    {
      type: 'ad',
      format: 'in-article',
    },
    {
      type: 'heading',
      level: 1,
      content: '2. Samsung Galaxy S24 Ultra',
    },
    {
      type: 'image',
      src: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf',
      alt: 'Samsung Galaxy S24 Ultra',
      caption:
        'O Galaxy S24 Ultra traz recursos avançados de IA e S Pen integrada',
    },
    {
      type: 'paragraph',
      content:
        'O Samsung Galaxy S24 Ultra é a definição de inovação Android. Com seu processador Snapdragon 8 Gen 3, recursos de IA generativa e câmera versátil, ele oferece uma experiência completa para usuários exigentes.',
    },
    {
      type: 'table',
      data: [
        { caracteristica: 'Especificação', detalhe: 'Descrição' },
        { caracteristica: 'Tela', detalhe: '6.8" Dynamic AMOLED 2X' },
        { caracteristica: 'Processador', detalhe: 'Snapdragon 8 Gen 3' },
        { caracteristica: 'RAM', detalhe: '12GB' },
        { caracteristica: 'Armazenamento', detalhe: '256GB/512GB/1TB' },
        {
          caracteristica: 'Câmera Principal',
          detalhe: '200MP + 50MP + 12MP + 10MP',
        },
        { caracteristica: 'Bateria', detalhe: '5.000 mAh' },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Recursos Exclusivos',
    },
    {
      type: 'list',
      items: [
        'S Pen integrada com baixa latência',
        'Galaxy AI com tradução em tempo real',
        'Zoom espacial de até 100x',
        'Tela com brilho de até 2.600 nits',
        'Proteção Gorilla Glass Armor',
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Comparativo de Câmeras',
    },
    {
      type: 'table',
      data: [
        {
          caracteristica: 'Recurso',
          iphone: 'iPhone 15 Pro Max',
          samsung: 'Galaxy S24 Ultra',
        },
        {
          caracteristica: 'Câmera Principal',
          iphone: '48MP',
          samsung: '200MP',
        },
        { caracteristica: 'Ultra Wide', iphone: '12MP', samsung: '12MP' },
        { caracteristica: 'Zoom Óptico', iphone: '5x', samsung: '10x' },
        { caracteristica: 'Zoom Digital', iphone: '25x', samsung: '100x' },
      ],
    },
    {
      type: 'paragraph',
      content:
        'Ambos os dispositivos representam o que há de melhor em suas respectivas plataformas. A escolha entre eles dependerá principalmente do ecossistema de sua preferência e necessidades específicas de uso.',
    },
  ],
  author: {
    name: 'João Silva',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    role: 'Editor de Tecnologia',
    bio: 'Especialista em tecnologia com mais de 10 anos de experiência.',
  },
  date: '2024-02-20T10:00:00Z',
  readTime: 15,
  category: 'Tecnologia',
};

const relatedPosts = [
  {
    slug: 'melhores-fones-bluetooth',
    title: 'Top 5 Fones Bluetooth para Comprar em 2024',
    excerpt: 'Guia completo dos melhores fones sem fio do mercado',
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Tecnologia',
  },
  // ... mais posts relacionados
];

export default function PostPage() {
  const [isFavorited, setIsFavorited] = useState(false);

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Conteúdo Principal */}
          <main className="lg:col-span-8">
            {/* Cabeçalho */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-primary font-medium">
                  {post.category}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsFavorited(!isFavorited)}
                  aria-label={
                    isFavorited
                      ? 'Remover dos favoritos'
                      : 'Adicionar aos favoritos'
                  }
                >
                  <Heart
                    className={`h-5 w-5 ${
                      isFavorited ? 'fill-primary text-primary' : ''
                    }`}
                  />
                </Button>
              </div>
              <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">
                {post.excerpt}
              </p>
              <PostAuthor
                author={post.author}
                date={post.date}
                readTime={post.readTime}
              />
            </div>

            {/* Imagem Principal */}
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="rounded-lg object-cover"
                priority
              />
            </div>

            {/* Conteúdo */}
            <div className="space-y-8">
              <PostContent content={post.content} />

              {/* Anúncio In-Article */}
              <div className="my-12">
                <div className="h-[250px] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">
                    Anúncio In-Article (728x90)
                  </span>
                </div>
              </div>

              {/* Continua o conteúdo... */}
            </div>
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="sticky top-[100px] space-y-8">
              {/* Anúncio Sidebar */}
              <div className="h-[600px] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">
                  Anúncio Sidebar (300x600)
                </span>
              </div>

              {/* Posts Relacionados */}
              <RelatedPosts posts={relatedPosts} />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
