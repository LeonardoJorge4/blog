import { HeroSection } from '@/components/HeroSection';
import { TopPicks } from '@/components/TopPicks';
import { PopularProducts } from '@/components/PopularProducts';
import { PostCard } from '@/components/PostCard';

// Dados mockados para exemplo
const featuredPosts = [
  {
    slug: 'melhores-smartphones-2024',
    title: 'Os 10 Melhores Smartphones de 2024',
    excerpt:
      'Confira nossa seleção dos melhores smartphones do ano, com análises detalhadas e comparativos de preço.',
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'Tecnologia',
    readTime: 8,
    views: 1234,
    comments: 23,
  },
  {
    slug: 'setup-home-office',
    title: 'Como Montar um Home Office Produtivo',
    excerpt:
      'Dicas essenciais para criar um espaço de trabalho confortável e eficiente em casa.',
    coverImage: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8',
    category: 'Produtividade',
    readTime: 10,
    views: 982,
    comments: 15,
  },
  {
    slug: 'fotografia-smartphone',
    title: 'Fotografia Profissional com Smartphone',
    excerpt:
      'Aprenda técnicas avançadas para tirar fotos incríveis usando apenas seu celular.',
    coverImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
    category: 'Fotografia',
    readTime: 15,
    views: 2156,
    comments: 42,
  },
];

const popularPosts = [
  {
    slug: 'guia-fones-bluetooth',
    title: 'Guia Definitivo: Como Escolher Fones Bluetooth',
    excerpt:
      'Aprenda tudo sobre fones bluetooth e descubra qual o melhor modelo para suas necessidades.',
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Áudio',
    readTime: 12,
    views: 3456,
    comments: 45,
  },
  {
    slug: 'tendencias-moda-2024',
    title: 'Tendências de Moda para 2024',
    excerpt:
      'As principais tendências que vão dominar o mundo da moda neste ano.',
    coverImage: 'https://images.unsplash.com/photo-1445205170230-053b83016050',
    category: 'Moda',
    readTime: 8,
    views: 2789,
    comments: 31,
  },
  {
    slug: 'gadgets-viagem',
    title: 'Gadgets Essenciais para Viagem',
    excerpt:
      'Os melhores dispositivos para tornar sua viagem mais confortável e conectada.',
    coverImage: 'https://images.unsplash.com/photo-1496171367470-9ed9a91ea931',
    category: 'Viagem',
    readTime: 10,
    views: 1987,
    comments: 27,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Banner Principal (970x90 ou 728x90) */}
      <div className="w-full bg-background">
        <div className="container mx-auto px-4 py-4">
          <div className="w-full h-[90px] bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">
              Anúncio Principal (970x90)
            </span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Posts em Destaque */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Posts em Destaque</h2>
            <p className="text-muted-foreground mt-1">
              Conteúdo selecionado especialmente para você
            </p>
          </div>
        </div>

        {/* Grid com Anúncio In-Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredPosts.slice(0, 3).map((post) => (
            <PostCard
              key={post.slug}
              {...post}
            />
          ))}
          {/* Anúncio In-Feed (300x250) */}
          <div className="h-[250px] bg-muted rounded-lg flex items-center justify-center">
            <span className="text-muted-foreground">Anúncio In-Feed</span>
          </div>
          {featuredPosts.slice(3, 6).map((post) => (
            <PostCard
              key={post.slug}
              {...post}
            />
          ))}
        </div>
      </section>

      {/* Produtos Recomendados com Sidebar Ad */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Conteúdo Principal */}
            <div className="lg:col-span-9">
              <TopPicks />
            </div>
            {/* Sidebar Ad Sticky */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-[140px]">
                <div className="space-y-6">
                  <div className="h-[600px] bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Anúncio (160x600)
                    </span>
                  </div>
                  <div className="h-[250px] bg-muted rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground">
                      Anúncio (300x250)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Posts Populares com Anúncios */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Conteúdo Principal */}
          <div className="lg:col-span-9">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Posts Populares</h2>
                <p className="text-muted-foreground mt-1">
                  Os conteúdos mais acessados da semana
                </p>
              </div>
            </div>

            {/* Grid com Anúncios Intercalados */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularPosts.slice(0, 2).map((post) => (
                <PostCard
                  key={post.slug}
                  {...post}
                />
              ))}
              {/* Anúncio In-Feed (300x250) */}
              <div className="md:col-span-2 h-[250px] bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Anúncio In-Feed</span>
              </div>
              {popularPosts.slice(2).map((post) => (
                <PostCard
                  key={post.slug}
                  {...post}
                />
              ))}
            </div>
          </div>

          {/* Sidebar Ad Sticky */}
          <div className="hidden lg:block lg:col-span-3">
            <div className="sticky top-[140px]">
              <div className="space-y-6">
                <div className="h-[600px] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">
                    Anúncio (160x600)
                  </span>
                </div>
                <div className="h-[250px] bg-muted rounded-lg flex items-center justify-center">
                  <span className="text-muted-foreground">
                    Anúncio (300x250)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produtos Populares */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <PopularProducts />
        </div>
      </section>

      {/* Banner de Anúncio Final (Antes do Footer) */}
      <div className="container mx-auto px-4 pb-12">
        <div className="w-full h-[250px] bg-muted rounded-lg flex items-center justify-center">
          <span className="text-muted-foreground">Anúncio Final (970x250)</span>
        </div>
      </div>
    </div>
  );
}
