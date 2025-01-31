export function ProductList({ type = 'latest' }) {
  const products = [
    {
      id: 1,
      name: 'iPhone 15',
      price: '$999',
      image:
        'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'MacBook Pro',
      price: '$1999',
      image:
        'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFjYm9va3xlbnwwfHwwfHx8MA%3D%3D',
    },
    {
      id: 3,
      name: 'Headset Logitech',
      price: '$199',
      image:
        'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHNldHxlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <section>
      <h2 className="text-xl font-bold mb-4">
        {type === 'recommended' ? 'Recomendados para Você' : 'Últimos Produtos'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-card p-4 rounded-lg border border-border"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
            <p className="text-muted">{product.price}</p>
            <a
              href="#"
              className="text-primary font-medium hover:underline"
            >
              Ver detalhes
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
