import { HeroSection } from '@/components/HeroSection';
import { PostCard } from '@/components/PostCard';
import { AdBanner } from '@/components/AdBanner';

// Mock data - Replace with actual data
const featuredPosts = [
  {
    slug: 'melhores-smartphones-2024',
    title: 'Os 10 Melhores Smartphones de 2024',
    excerpt:
      'Confira nossa seleção dos melhores smartphones do ano, com análises detalhadas e comparativos de preço.',
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'Tech',
    readTime: 8,
    views: 1234,
    comments: 23,
  },
  // ... outros posts
];

const techPosts = [
  {
    slug: 'guia-fones-bluetooth',
    title: 'Guia Definitivo: Como Escolher Fones Bluetooth',
    excerpt:
      'Aprenda tudo sobre fones bluetooth e descubra qual o melhor modelo para suas necessidades.',
    coverImage: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    category: 'Tech',
    readTime: 12,
    views: 3456,
    comments: 45,
  },
  // ... outros posts
];

const lifestylePosts = [
  {
    slug: 'setup-home-office',
    title: 'Como Montar um Home Office Produtivo',
    excerpt:
      'Dicas essenciais para criar um espaço de trabalho confortável e eficiente em casa.',
    coverImage: 'https://images.unsplash.com/photo-1593642532744-d377ab507dc8',
    category: 'Lifestyle',
    readTime: 10,
    views: 982,
    comments: 15,
  },
  // ... outros posts
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Top Banner Ad - Full Width */}
      <div className="w-full bg-muted/30 py-4">
        <div className="container mx-auto px-4">
          <AdBanner position="top" />
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-8">
          <HeroSection />
        </section>

        {/* Featured Posts */}
        <section className="py-12 border-t">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold">Featured Posts</h2>
              <p className="text-muted-foreground mt-1">
                Our most comprehensive reviews and guides
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <PostCard
                key={post.slug}
                {...post}
              />
            ))}
          </div>
        </section>

        {/* Mid-Page Banner Ad - Full Width Background */}
        <div className="relative -mx-4 bg-muted/30 py-4">
          <div className="container mx-auto">
            <AdBanner position="middle" />
          </div>
        </div>

        {/* Tech Reviews Section with Sidebar */}
        <section className="py-12 border-t">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold">Tech Reviews</h2>
                  <p className="text-muted-foreground mt-1">
                    Latest in technology and gadgets
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {techPosts.map((post) => (
                  <PostCard
                    key={post.slug}
                    {...post}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar Ad */}
            <div className="hidden lg:block lg:col-span-3">
              <div className="sticky top-[140px] space-y-6">
                <AdBanner
                  className="h-[600px]"
                  position="sidebar-top"
                />
                <AdBanner
                  className="h-[250px]"
                  position="sidebar-bottom"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lifestyle & Productivity Section */}
        <div className="relative py-12 border-t">
          <div className="absolute inset-0 bg-muted/30" />
          <div className="relative">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold">Lifestyle & Productivity</h2>
                <p className="text-muted-foreground mt-1">
                  Tips and recommendations for a better life
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {lifestylePosts.map((post) => (
                <PostCard
                  key={post.slug}
                  {...post}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner Ad - Full Width Background */}
        <div className="relative -mx-4 bg-muted/30 py-4 mt-12">
          <div className="container mx-auto">
            <AdBanner position="bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}
