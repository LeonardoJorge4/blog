import * as React from 'react';
import Image from 'next/image';
import { Table } from '@/components/ui/table';

interface PostSection {
  type: 'paragraph' | 'heading' | 'image' | 'table' | 'list';
  content: string;
  level?: 1 | 2 | 3; // Para headings
  src?: string; // Para imagens
  alt?: string; // Para imagens
  caption?: string; // Para imagens
  data?: any[]; // Para tabelas
  items?: string[]; // Para listas
}

interface PostContentProps {
  content: PostSection[];
}

export function PostContent({ content }: PostContentProps) {
  function renderSection(section: PostSection) {
    switch (section.type) {
      case 'paragraph':
        return (
          <p className="text-lg leading-relaxed mb-6">{section.content}</p>
        );

      case 'heading':
        const HeadingTag = `h${section.level}` as keyof HTMLElementTagNameMap;
        const headingClasses = {
          1: 'text-3xl font-bold mt-8 mb-6',
          2: 'text-2xl font-bold mt-8 mb-4',
          3: 'text-xl font-bold mt-6 mb-3',
        }[section.level || 1];

        return (
          <HeadingTag className={headingClasses}>{section.content}</HeadingTag>
        );

      case 'image':
        return (
          <figure className="my-8">
            <div className="relative aspect-[16/9]">
              <Image
                src={section.src || ''}
                alt={section.alt || ''}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            {section.caption && (
              <figcaption className="text-sm text-muted-foreground text-center mt-2">
                {section.caption}
              </figcaption>
            )}
          </figure>
        );

      case 'table':
        return (
          <div className="my-8 overflow-x-auto">
            <Table>
              <thead>
                {section.data && section.data.length > 0 && (
                  <tr>
                    {Object.values(section.data[0]).map((cell, index) => (
                      <th
                        key={index}
                        className="font-medium"
                      >
                        {cell as string}
                      </th>
                    ))}
                  </tr>
                )}
              </thead>
              <tbody>
                {section.data &&
                  section.data.slice(1).map((row, index) => (
                    <tr key={index}>
                      {Object.values(row).map((cell, cellIndex) => (
                        <td key={cellIndex}>{cell as string}</td>
                      ))}
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        );

      case 'list':
        return (
          <ul className="list-disc list-inside space-y-2 mb-6">
            {section.items?.map((item, index) => (
              <li
                key={index}
                className="text-lg"
              >
                {item}
              </li>
            ))}
          </ul>
        );

      default:
        return null;
    }
  }

  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      {content.map((section, index) => (
        <div key={index}>{renderSection(section)}</div>
      ))}
    </article>
  );
}
