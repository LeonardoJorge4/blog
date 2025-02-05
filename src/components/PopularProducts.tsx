import { ProductCard } from './ProductCard';

const popularProducts = [
  {
    id: '4',
    title: 'MacBook Pro M2',
    description: 'Poder e eficiência para profissionais exigentes',
    price: 1499.99,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
    affiliateLink: 'https://exemplo.com/produto-4',
  },
  {
    id: '5',
    title: 'DJI Mini 3 Pro',
    description: 'Drone compacto com câmera 4K e recursos profissionais',
    price: 759.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f',
    affiliateLink: 'https://exemplo.com/produto-5',
  },
  {
    id: '6',
    title: 'Samsung Galaxy Watch 5',
    description: 'Smartwatch com monitoramento avançado de saúde',
    price: 279.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1',
    affiliateLink: 'https://exemplo.com/produto-6',
  },
];

export function PopularProducts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Cabeçalho da Seção */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold">Mais Populares</h2>
            <p className="text-muted-foreground mt-2">
              Os produtos mais acessados pelos nossos leitores
            </p>
          </div>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
