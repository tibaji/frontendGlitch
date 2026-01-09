// src/data/artistas.ts
export interface Artista {
  id: number;
  nome: string;
  especialidade: string;
  imagem: string;
  bio?: string;
}

export const artistas: Artista[] = [
  { 
    id: 1, 
    nome: 'Ana Digital', 
    especialidade: 'Arte Glitch',
    imagem: 'https://picsum.photos/seed/artista1/300/300',
    bio: 'Explorando as falhas digitais como forma de expressão artística'
  },
  { 
    id: 2, 
    nome: 'Cyber Luna', 
    especialidade: 'Video Art',
    imagem: 'https://picsum.photos/seed/artista2/300/300',
    bio: 'Narrativas audiovisuais no ciberespaço'
  },
  { 
    id: 3, 
    nome: 'Byte Rosa', 
    especialidade: 'Net Art',
    imagem: 'https://picsum.photos/seed/artista3/300/300',
    bio: 'Arte nativa da internet e cultura digital'
  },
  { 
    id: 4, 
    nome: 'Pixel Queer', 
    especialidade: 'Instalações',
    imagem: 'https://picsum.photos/seed/artista4/300/300',
    bio: 'Instalações imersivas e interfaces experimentais'
  },
];
