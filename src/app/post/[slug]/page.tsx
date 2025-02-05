'use client';

import { useState } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PostAuthor } from '@/components/PostAuthor';
import { PostContent } from '@/components/PostContent';
import { RelatedPosts } from '@/components/RelatedPosts';

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
        'O mercado de smartphones está cada vez mais competitivo, com fabricantes lançando dispositivos impressionantes a cada ano. Neste artigo, vamos analisar os 10 melhores smartphones disponíveis em 2024.',
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
        'O novo iPhone 15 Pro Max traz melhorias significativas na câmera',
    },
    {
      type: 'paragraph',
      content:
        'O iPhone 15 Pro Max representa o ápice da tecnologia móvel da Apple. Com seu novo chip A17 Pro e sistema de câmera revolucionário, ele estabelece novos padrões para smartphones premium.',
    },
    {
      type: 'heading',
      level: 2,
      content: 'Especificações',
    },
    {
      type: 'table',
      data: [
        { caracteristica: 'Característica', detalhe: 'Detalhe' },
        { caracteristica: 'Tela', detalhe: '6.7" OLED' },
        { caracteristica: 'Processador', detalhe: 'A17 Pro' },
        { caracteristica: 'Câmera', detalhe: '48MP' },
      ],
    },
    {
      type: 'heading',
      level: 2,
      content: 'Principais Recursos',
    },
    {
      type: 'list',
      items: [
        'Modo Ação para vídeos super estáveis',
        'Fotografia em ProRAW',
        'Bateria com duração de até 29 horas',
        'Design em titânio',
      ],
    },
    // ... mais seções
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
              <img
                src={post.coverImage}
                alt={post.title}
                className="rounded-lg object-cover w-full h-full"
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
