import Link from 'next/link';
import Image from 'next/image';
import { Clock, MessageCircle, Eye } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

interface PostCardProps {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  readTime: number;
  views: number;
  comments: number;
  layout?: 'grid' | 'list';
}

export function PostCard({
  layout = 'grid',
  slug,
  title,
  excerpt,
  coverImage,
  category,
  readTime,
  views,
  comments,
}: PostCardProps) {
  if (layout === 'list') {
    return (
      <div className="flex gap-6 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
        <div className="relative aspect-[16/9] w-48 flex-shrink-0">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="rounded-md object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold line-clamp-2 mb-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {readTime} min
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-4 w-4" />
            {views}
          </span>
          <span className="flex items-center gap-1">
            <MessageCircle className="h-4 w-4" />
            {comments}
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link href={`/post/${slug}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
        <div className="relative aspect-[16/9]">
          <Image
            src={coverImage}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <Badge className="absolute top-4 left-4">{category}</Badge>
        </div>
        <CardContent className="p-6">
          <h3 className="text-xl font-bold line-clamp-2 mb-2">{title}</h3>
          <p className="text-muted-foreground line-clamp-2">{excerpt}</p>
        </CardContent>
        <CardFooter className="px-6 py-4 border-t flex items-center justify-between text-muted-foreground text-sm">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {readTime} min
            </span>
            <span className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              {views}
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              {comments}
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
