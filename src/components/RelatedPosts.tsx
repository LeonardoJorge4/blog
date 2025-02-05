import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Posts Relacionados</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`}>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="aspect-[16/9] relative mb-3">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <span className="text-xs text-primary font-medium">
                  {post.category}
                </span>
                <h4 className="font-medium line-clamp-2 mt-1">{post.title}</h4>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
} 