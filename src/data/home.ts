// src/data/home.ts

export interface SecaoHome {
  id: string;
  titulo: string;
  subtitulo: string;
  link: string;
  imagem: string;
  corClasse: string; // Classes completas do Tailwind
}

export const secoesHome: SecaoHome[] = [
  {
    id: 'artistas',
    titulo: 'artistas',
    subtitulo: 'artistas avatares',
    link: '/artistas',
    imagem: '/images/home/artistas.jpg',
    corClasse: 'border-neon-pink hover:shadow-neon-pink/50 text-neon-pink'
  },
  {
    id: 'equipe',
    titulo: 'quem faz a galeria',
    subtitulo: 'conheça nossa equipe',
    link: '/equipe',
    imagem: '/images/home/ciborgueEquipe.png',
    corClasse: 'border-neon-blue hover:shadow-neon-blue/50 text-neon-blue'
  },
  {
    id: 'galeria',
    titulo: 'futuros impossíveis',
    subtitulo: 'utopias digitais e distopias glitch',
    link: '/galeria',
    imagem: '/images/home/galeriaTeste.jpg',
    corClasse: 'border-neon-purple hover:shadow-neon-purple/50 text-neon-purple'
  },
  {
    id: 'galeria-dois',
    titulo: 'rastros digitais',
    subtitulo: 'memória, arquivo e dados corrompidos',
    link: '/galeriadois',
    imagem: '/images/home/galeriaDois.jpg',
    corClasse: 'border-neon-orange hover:shadow-neon-orange/50 text-neon-orange'
  },
  {
    id: 'arquivo',
    titulo: 'arquivo',
    subtitulo: 'exposições passadas',
    link: '/arquivo',
    imagem: '/images/home/arquivoTeste.jpg',
    corClasse: 'border-neon-pink hover:shadow-neon-pink/50 text-neon-pink'
  },
  {
    id: 'forums',
    titulo: 'fóruns glitch',
    subtitulo: 'discussões entre ciborgues',
    link: '/forums',
    imagem: '/images/home/forum.jpg',
    corClasse: 'border-neon-blue hover:shadow-neon-blue/50 text-neon-blue'
  }
];
