import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Sidebar } from '@/components/Sidebar';
import { ProductList } from '@/components/ProductList';
import { AdBanner } from '@/components/AdBanner';

export default function HomePage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      <main className="container mx-auto flex flex-col md:flex-row gap-6 py-6">
        {/* Sidebar */}
        <Sidebar />

        {/* Conteúdo Principal */}
        <div className="flex-1 space-y-6">
          {/* Top Banner AD */}
          <AdBanner adSlot="top-banner" />

          {/* Lista de Produtos */}
          <ProductList />

          {/* In-Content AD */}
          <AdBanner adSlot="in-content" />

          {/* Mais Conteúdo */}
          <ProductList type="recommended" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
