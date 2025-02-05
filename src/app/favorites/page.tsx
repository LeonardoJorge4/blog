'use client';

import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ProductCard } from '@/components/ProductCard';
import { PostCard } from '@/components/PostCard';
import { Heart, Trash2 } from 'lucide-react';

interface FavoritePost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: number;
  views: number;
  comments: number;
}

interface FavoriteProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string;
  affiliateLink: string;
}

// Mock data - Replace with actual data from your backend
const mockFavoritePosts: FavoritePost[] = [
  {
    slug: 'best-smartphones-2024',
    title: 'Best Smartphones of 2024',
    excerpt:
      'A comprehensive guide to the top smartphones available in the market.',
    coverImage: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9',
    category: 'Tech',
    readTime: 10,
    views: 1500,
    comments: 25,
  },
  // Add more mock posts...
];

const mockFavoriteProducts: FavoriteProduct[] = [
  {
    id: '1',
    title: 'Sony WH-1000XM4',
    description:
      'Premium noise-canceling headphones with exceptional sound quality.',
    price: 349.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    affiliateLink: 'https://example.com/product/1',
  },
  // Add more mock products...
];

export default function FavoritesPage() {
  const [posts, setPosts] = useState<FavoritePost[]>(mockFavoritePosts);
  const [products, setProducts] =
    useState<FavoriteProduct[]>(mockFavoriteProducts);

  function handleRemovePost(slug: string) {
    setPosts((prev) => prev.filter((post) => post.slug !== slug));
  }

  function handleRemoveProduct(id: string) {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  }

  return (
    <div className="min-h-screen py-8 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Heart className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">My Favorites</h1>
        </div>

        {/* Tabs */}
        <Tabs
          defaultValue="posts"
          className="space-y-8"
        >
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger
              value="posts"
              className="text-lg"
            >
              Posts ({posts.length})
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="text-lg"
            >
              Products ({products.length})
            </TabsTrigger>
          </TabsList>

          {/* Posts Tab */}
          <TabsContent value="posts">
            {posts.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No Favorite Posts Yet
                </h3>
                <p className="text-muted-foreground">
                  Start exploring and save posts you love!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <div
                    key={post.slug}
                    className="group relative"
                  >
                    <button
                      onClick={() => handleRemovePost(post.slug)}
                      className="absolute right-2 top-2 z-10 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                    <PostCard {...post} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Products Tab */}
          <TabsContent value="products">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <Heart className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  No Favorite Products Yet
                </h3>
                <p className="text-muted-foreground">
                  Save products you're interested in!
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="group relative"
                  >
                    <button
                      onClick={() => handleRemoveProduct(product.id)}
                      className="absolute right-2 top-2 z-10 p-2 bg-background/80 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      aria-label="Remove from favorites"
                    >
                      <Trash2 className="w-4 h-4 text-destructive" />
                    </button>
                    <ProductCard {...product} />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
