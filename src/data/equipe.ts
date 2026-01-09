// src/data/equipe.ts
export interface MembroEquipe {
  id: number;
  nome: string;
  papel: string;
  bio: string;
  imagem: string;
  cor: string;
  links: {
    instagram: string;
    site: string;
    siteDisplay?: string;
  };
}

export const membros: MembroEquipe[] = [
  {
    id: 1,
    nome: 'tibaji chave',
    papel: 'fundadora&dev&hacker',
    bio: 'contadora de estórias multimídia. ciborgue do século xxi, remodelando corpos. tecendo futuros',
    imagem: '/images/equipe/perfilGlitch.jpg',
    cor: 'pink', // Usar preset do Tailwind
    links: {
      instagram: 'https://www.instagram.com/plvtonyyyk/',
      site: 'https://choji.site/',
      siteDisplay: 'choji.site'
    }
  },
  {
    id: 2,
    nome: 'Byte Rosa',
    papel: 'Diretora Criativa',
    bio: 'Designer de experiências digitais e programadora. Cria interfaces que desafiam as normas visuais.',
    imagem: 'https://picsum.photos/seed/byte/400/400',
    cor: 'blue',
    links: {
      instagram: 'https://www.instagram.com/byterosa/',
      site: 'https://byterosa.dev',
      siteDisplay: 'byterosa.dev'
    }
  },
  {
    id: 3,
    nome: 'elvira cachorra',
    papel: 'dj&fotógrafa&artista',
    bio: 'manipuladora dos pixels e das ondas. constrói mundos outros a partir das sensações',
    imagem: 'https://picsum.photos/seed/nyx/400/400',
    cor: 'purple',
    links: {
      instagram: 'https://www.instagram.com/elviracachorra/',
      site: 'https://linktr.ee/elviracachorra',
      siteDisplay: 'linktree da cachorra'
    }
  },
  {
    id: 4,
    nome: 'Glitch Angel',
    papel: 'Pesquisadora',
    bio: 'Doutoranda em estudos de mídia digital. Investiga as intersecções entre tecnologia e gênero.',
    imagem: 'https://picsum.photos/seed/glitch/400/400',
    cor: 'green',
    links: {
      instagram: 'https://www.instagram.com/glitchangel/',
      site: 'https://glitchangel.research',
      siteDisplay: 'glitchangel.research'
    }
  },
  {
    id: 5,
    nome: 'Pixel Queer',
    papel: 'Community Manager',
    bio: 'Gestora de comunidades digitais e mediadora de debates sobre arte e diversidade.',
    imagem: 'https://picsum.photos/seed/pixel/400/400',
    cor: 'pink',
    links: {
      instagram: 'https://www.instagram.com/pixelqueer/',
      site: 'https://pixelqueer.space',
      siteDisplay: 'pixelqueer.space'
    }
  },
  {
    id: 6,
    nome: 'Hack Violet',
    papel: 'Coordenadora de Eventos',
    bio: 'Produtora cultural e DJ. Organiza encontros entre arte, tecnologia e ativismo.',
    imagem: 'https://picsum.photos/seed/violet/400/400',
    cor: 'blue',
    links: {
      instagram: 'https://www.instagram.com/hackviolet/',
      site: 'https://hackviolet.events',
      siteDisplay: 'hackviolet.events'
    }
  }
];
