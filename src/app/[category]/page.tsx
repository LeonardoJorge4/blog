'use client';

import { PostCard } from '@/components/PostCard';
import { AdBanner } from '@/components/AdBanner';
import { Button } from '@/components/ui/button';
import { Grid, List } from 'lucide-react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useLocale } from '@/contexts/LocaleContext';
import { getTranslation } from '@/locales';

// Mock data - Replace with actual data
const categoryData = {
  tech: {
    title: 'Technology',
    description: 'Latest in gadgets, electronics, and tech innovations',
    heroPost: {
      slug: 'future-of-tech-2024',
      title: 'The Future of Technology in 2024',
      excerpt:
        'Exploring emerging trends and breakthrough innovations shaping our digital future',
      coverImage:
        'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
      category: 'Tech',
      readTime: 20,
      views: 5000,
      comments: 89,
    },
    topPicks: [
      {
        slug: 'best-smartphones-2024',
        title: 'Best Smartphones of 2024',
        excerpt: "A comprehensive guide to this year's top smartphones",
        coverImage:
          'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
        category: 'Tech',
        readTime: 15,
        views: 2500,
        comments: 48,
      },
      {
        slug: 'macbook-m3-review',
        title: 'MacBook Pro M3 Max Review',
        excerpt: 'The most powerful MacBook ever - but do you need it?',
        coverImage:
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
        category: 'Tech',
        readTime: 18,
        views: 3200,
        comments: 52,
      },
      {
        slug: 'future-of-vr',
        title: 'Virtual Reality in 2024',
        excerpt: 'How VR is transforming gaming, work, and social interaction',
        coverImage:
          'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d',
        category: 'Tech',
        readTime: 12,
        views: 1800,
        comments: 34,
      },
    ],
    bySubcategories: {
      'Artificial Intelligence': [
        {
          slug: 'ai-developments-2024',
          title: 'AI Breakthroughs in 2024',
          excerpt: 'The most significant AI developments this year',
          coverImage:
            'https://images.unsplash.com/photo-1555255707-c07966088b7b',
          category: 'Tech',
          readTime: 10,
          views: 3200,
          comments: 56,
        },
        {
          slug: 'ai-tools-productivity',
          title: 'Best AI Tools for Productivity',
          excerpt: 'Boost your workflow with these AI-powered applications',
          coverImage:
            'https://images.unsplash.com/photo-1488229297570-58520851e868',
          category: 'Tech',
          readTime: 8,
          views: 2100,
          comments: 29,
        },
      ],
      'Smart Home': [
        {
          slug: 'smart-home-essentials',
          title: 'Smart Home Essentials 2024',
          excerpt: 'Must-have devices for your connected home',
          coverImage:
            'https://images.unsplash.com/photo-1558002038-1055907df827',
          category: 'Tech',
          readTime: 15,
          views: 1900,
          comments: 41,
        },
        {
          slug: 'matter-protocol-explained',
          title: 'Matter Protocol Explained',
          excerpt: 'Understanding the new smart home standard',
          coverImage:
            'https://images.unsplash.com/photo-1585060544812-6b45742d762f',
          category: 'Tech',
          readTime: 12,
          views: 1500,
          comments: 23,
        },
      ],
      Gadgets: [
        {
          slug: 'best-tablets-2024',
          title: 'Best Tablets of 2024',
          excerpt: 'Top tablets for every budget and need',
          coverImage:
            'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0',
          category: 'Tech',
          readTime: 14,
          views: 2800,
          comments: 37,
        },
        {
          slug: 'fitness-trackers-comparison',
          title: 'Fitness Trackers Compared',
          excerpt: 'Finding the perfect fitness companion',
          coverImage:
            'https://images.unsplash.com/photo-1557166983-5939644443a3',
          category: 'Tech',
          readTime: 16,
          views: 2200,
          comments: 45,
        },
      ],
    },
    weeklyHighlights: [
      {
        slug: 'chatgpt-5-rumors',
        title: 'ChatGPT-5: What to Expect',
        excerpt:
          'Analyzing the rumors and potential features of the next GPT model',
        coverImage:
          'https://images.unsplash.com/photo-1677442136019-21780ecad995',
        category: 'Tech',
        readTime: 8,
        views: 4200,
        comments: 67,
      },
      {
        slug: 'apple-vision-pro-review',
        title: 'Apple Vision Pro: 3 Months Later',
        excerpt: "A deep dive into living with Apple's spatial computer",
        coverImage:
          'https://images.unsplash.com/photo-1638276996080-67a84382fbdb',
        category: 'Tech',
        readTime: 22,
        views: 5100,
        comments: 89,
      },
      {
        slug: 'ev-charging-future',
        title: 'The Future of EV Charging',
        excerpt: 'New technologies reshaping electric vehicle charging',
        coverImage:
          'https://images.unsplash.com/photo-1697144568941-86661ce62971',
        category: 'Tech',
        readTime: 12,
        views: 2900,
        comments: 43,
      },
    ],
    buyingGuides: [
      {
        slug: 'wireless-earbuds-comparison',
        title: 'Complete Guide to Wireless Earbuds',
        excerpt: 'Everything you need to know before buying wireless earbuds',
        coverImage:
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
        category: 'Tech',
        readTime: 12,
        views: 1800,
        comments: 32,
      },
      {
        slug: 'gaming-laptops-guide',
        title: 'Gaming Laptops Buying Guide',
        excerpt: 'How to choose the perfect gaming laptop in 2024',
        coverImage:
          'https://images.unsplash.com/photo-1587302912306-cf1ed9c33146',
        category: 'Tech',
        readTime: 15,
        views: 2400,
        comments: 51,
      },
      {
        slug: 'smart-tv-guide',
        title: 'Smart TV Buying Guide',
        excerpt: 'Navigate the complex world of modern Smart TVs',
        coverImage:
          'https://images.unsplash.com/photo-1593784991095-a205069470b6',
        category: 'Tech',
        readTime: 14,
        views: 2100,
        comments: 38,
      },
    ],
  },
  beauty: {
    title: 'Beauty & Skincare',
    description: 'Expert beauty tips, product reviews, and skincare guides',
    // ... estrutura similar para beauty
  },
  // ... outras categorias
};

export default function CategoryPage() {
  const { locale, country } = useLocale();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [categoryContent, setCategoryContent] = useState<any>(null);
  const params = useParams();

  useEffect(() => {
    if (params?.category) {
      const categorySlug = params.category as string;
      const content = {
        ...categoryData[categorySlug as keyof typeof categoryData],
        title: getTranslation(locale, `categories.${categorySlug}.title`),
        description: getTranslation(
          locale,
          `categories.${categorySlug}.description`
        ),
      };
      setCategoryContent(content);
    }
  }, [params?.category, locale]);

  if (!categoryContent) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Top Banner Ad */}
        <div className="mb-12">
          <AdBanner adSlot="1234567890" />
        </div>

        {/* Category Header com Hero Post */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {categoryContent.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {categoryContent.description}
              </p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('grid')}
                aria-label="Grid view"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="icon"
                onClick={() => setViewMode('list')}
                aria-label="List view"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Hero Post */}
          <div className="relative aspect-[21/9] rounded-xl overflow-hidden mb-8">
            <Image
              src={categoryContent.heroPost.coverImage}
              alt={categoryContent.heroPost.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                {categoryContent.heroPost.title}
              </h2>
              <p className="text-white/80 text-lg max-w-2xl">
                {categoryContent.heroPost.excerpt}
              </p>
            </div>
          </div>
        </section>

        {/* Editor's Top Picks */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Editor's Top Picks</h2>
          <div
            className={`grid ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'
            } gap-6`}
          >
            {categoryContent.topPicks.map((post) => (
              <PostCard
                key={post.slug}
                {...post}
                layout={viewMode}
              />
            ))}
          </div>
        </section>

        {/* Mid-Page Ad */}
        <div className="my-12">
          <AdBanner adSlot="1234567890" />
        </div>

        {/* Browse by Subcategories */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
          <div className="space-y-12">
            {Object.entries(categoryContent.bySubcategories).map(
              ([subcategory, posts]) => (
                <div key={subcategory}>
                  <h3 className="text-xl font-semibold mb-4">{subcategory}</h3>
                  <div
                    className={`grid ${
                      viewMode === 'grid'
                        ? 'grid-cols-1 md:grid-cols-2'
                        : 'grid-cols-1'
                    } gap-6`}
                  >
                    {posts.map((post) => (
                      <PostCard
                        key={post.slug}
                        {...post}
                        layout={viewMode}
                      />
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        {/* Buying Guides */}
        <section className="mb-16 bg-muted/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Buying Guides</h2>
          <div
            className={`grid ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
            } gap-6`}
          >
            {categoryContent.buyingGuides.map((post) => (
              <PostCard
                key={post.slug}
                {...post}
                layout={viewMode}
              />
            ))}
          </div>
        </section>

        {/* Weekly Highlights */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6">This Week's Highlights</h2>
          <div
            className={`grid ${
              viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1'
            } gap-6`}
          >
            {categoryContent.weeklyHighlights.map((post) => (
              <PostCard
                key={post.slug}
                {...post}
                layout={viewMode}
              />
            ))}
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="mt-12">
          <AdBanner adSlot="1234567890" />
        </div>
      </div>
    </div>
  );
}
