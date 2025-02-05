import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

interface PostAuthorProps {
  author: {
    name: string;
    image: string;
  };
  date: string;
  readTime: number;
}

export function PostAuthor({ author, date, readTime }: PostAuthorProps) {
  return (
    <div className="flex items-center space-x-3">
      <Image
        src={author.image}
        alt={author.name}
        width={32}
        height={32}
        className="rounded-full"
      />
      <div className="text-sm">
        <Link 
          href={`/autor/${author.name.toLowerCase().replace(' ', '-')}`}
          className="font-medium hover:text-primary"
        >
          {author.name}
        </Link>
        <span className="text-muted-foreground"> • {formatDate(date)} • {readTime} min de leitura</span>
      </div>
    </div>
  );
} 