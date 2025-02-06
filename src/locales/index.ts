export const translations = {
  'en-US': {
    common: {
      loading: 'Loading...',
      readTime: 'min read',
      views: 'views',
      comments: 'comments',
      viewMore: 'View More',
      search: 'Search',
      notFound: 'Page not found',
    },
    navigation: {
      home: 'Home',
      categories: 'Categories',
      about: 'About',
      contact: 'Contact',
      tech: 'Tech',
      beauty: 'Beauty',
      house: 'House',
    },
    categories: {
      tech: {
        title: 'Technology',
        description: 'Latest in gadgets, electronics, and tech innovations',
      },
      beauty: {
        title: 'Beauty & Skincare',
        description: 'Expert beauty tips, product reviews, and skincare guides',
      },
      fashion: {
        title: 'Fashion',
        description: 'Style trends, outfit ideas, and fashion inspiration',
      },
      home: {
        title: 'Home & Living',
        description: 'Home decor, organization tips, and lifestyle guides',
      },
      fitness: {
        title: 'Fitness & Health',
        description: 'Workout tips, nutrition advice, and wellness guides',
      },
    },
    sections: {
      featuredPosts: 'Featured Posts',
      editorsPicks: "Editor's Top Picks",
      latestPosts: 'Latest Posts',
      trendingPosts: 'Trending Posts',
      weeklyHighlights: "This Week's Highlights",
      buyingGuides: 'Buying Guides',
      relatedPosts: 'Related Posts',
      browseByCategory: 'Browse by Category',
      newsletter: {
        title: 'Subscribe to our Newsletter',
        description: 'Get the latest updates directly in your inbox',
        placeholder: 'Enter your email',
        button: 'Subscribe',
        success: 'Thank you for subscribing!',
        error: 'Something went wrong. Please try again.',
      },
    },
    footer: {
      about: {
        title: 'About Us',
        description:
          'Your trusted source for product recommendations, reviews and comparisons',
      },
      categories: 'Categories',
      company: 'Company',
      followUs: 'Follow Us',
      privacyPolicy: 'Privacy Policy',
      termsOfUse: 'Terms of Use',
      copyright: 'All rights reserved',
    },
    post: {
      publishedOn: 'Published on',
      by: 'by',
      addToFavorites: 'Add to favorites',
      removeFromFavorites: 'Remove from favorites',
      advertisement: 'Advertisement',
    },
    affiliateLinks: {
      smartphones: {
        amazon: 'https://amazon.com/...',
        bestbuy: 'https://bestbuy.com/...',
      },
      // ... outros links
    },
  },
  'pt-BR': {
    common: {
      loading: 'Carregando...',
      readTime: 'min de leitura',
      views: 'visualizações',
      comments: 'comentários',
      viewMore: 'Ver Mais',
      search: 'Buscar',
      notFound: 'Página não encontrada',
    },
    navigation: {
      home: 'Início',
      categories: 'Categorias',
      about: 'Sobre',
      contact: 'Contato',
      tech: 'Tecnologia',
      beauty: 'Beleza',
      house: 'Casa',
    },
    categories: {
      tech: {
        title: 'Tecnologia',
        description:
          'As últimas novidades em gadgets, eletrônicos e inovações tecnológicas',
      },
      beauty: {
        title: 'Beleza & Skincare',
        description:
          'Dicas de beleza, análises de produtos e guias de skincare',
      },
      fashion: {
        title: 'Moda',
        description: 'Tendências, ideias de looks e inspiração fashion',
      },
      home: {
        title: 'Casa & Decoração',
        description: 'Decoração, dicas de organização e guias de lifestyle',
      },
      fitness: {
        title: 'Fitness & Saúde',
        description:
          'Dicas de treino, conselhos nutricionais e guias de bem-estar',
      },
    },
    sections: {
      featuredPosts: 'Posts em Destaque',
      editorsPicks: 'Escolhas do Editor',
      latestPosts: 'Últimos Posts',
      trendingPosts: 'Em Alta',
      weeklyHighlights: 'Destaques da Semana',
      buyingGuides: 'Guias de Compra',
      relatedPosts: 'Posts Relacionados',
      browseByCategory: 'Navegar por Categoria',
      newsletter: {
        title: 'Assine nossa Newsletter',
        description: 'Receba as últimas atualizações diretamente no seu email',
        placeholder: 'Digite seu email',
        button: 'Assinar',
        success: 'Obrigado por assinar!',
        error: 'Algo deu errado. Por favor, tente novamente.',
      },
    },
    footer: {
      about: {
        title: 'Sobre Nós',
        description:
          'Sua fonte confiável de recomendações de produtos, análises e comparações',
      },
      categories: 'Categorias',
      company: 'Empresa',
      followUs: 'Siga-nos',
      privacyPolicy: 'Política de Privacidade',
      termsOfUse: 'Termos de Uso',
      copyright: 'Todos os direitos reservados',
    },
    post: {
      publishedOn: 'Publicado em',
      by: 'por',
      addToFavorites: 'Adicionar aos favoritos',
      removeFromFavorites: 'Remover dos favoritos',
      advertisement: 'Anúncio',
    },
    affiliateLinks: {
      smartphones: {
        amazon: 'https://amazon.com.br/...',
        magazineluiza: 'https://magazineluiza.com.br/...',
      },
      // ... outros links
    },
  },
};

export function getTranslation(locale: string, path: string) {
  const keys = path.split('.');
  let current: any = translations[locale as keyof typeof translations];

  for (const key of keys) {
    current = current?.[key];
  }

  return current || translations['en-US'];
}
