// src/data/ciberespacos.ts
import { LucideIcon, Globe, Users, Archive, MessageSquare, Zap, BookOpen } from 'lucide-react';

export interface Link {
  titulo: string;
  url: string;
  descricao: string;
  icone: string;
  externo: boolean;
}

export interface Leitura {
  titulo: string;
  autor: string;
  descricao: string;
  url?: string;
  cor: 'pink' | 'blue' | 'purple' | 'orange';
}

export const links: Link[] = [
  {
    titulo: 'cyberfeminism index',
    url: 'https://cyberfeminismindex.com',
    descricao: 'arquivo de arte e teoria ciberfeminista',
    icone: 'globe',
    externo: true
  },
  {
    titulo: 'old boys network',
    url: 'https://obn.org/',
    descricao: 'primeira aliança internacional ciberfeminista (1997-2001)',
    icone: 'users',
    externo: true
  },
  {
    titulo: 'arquivo',
    url: '/arquivo',
    descricao: 'exposições passadas da galeria_glitch',
    icone: 'archive',
    externo: false
  },
  {
    titulo: '100 anti-thesis',
    url: 'https://obn.org/obn/reading_room/manifestos/html/anti.html',
    descricao: '100 antíteses do ciberfeminismo',
    icone: 'globe',
    externo: true
  },
  {
    titulo: 'fóruns glitch',
    url: '/forums',
    descricao: 'espaço de discussão e troca entre ciborgues',
    icone: 'message-square',
    externo: false
  },
  {
    titulo: 'coding rights',
    url: 'https://codingrights.org/',
    descricao: 'feminismos e a tecnologia no tempo do agora',
    icone: 'zap',
    externo: true
  }
];

export const leituras: Leitura[] = [
  {
    titulo: 'manifesto ciborgue',
    autor: 'donna haraway',
    descricao: 'texto fundacional do ciberfeminismo',
    url: 'https://edisciplinas.usp.br/pluginfile.php/4004648/mod_resource/content/1/Manifesto%20Ciborgue%20-%20Donna%20Haraway.pdf',
    cor: 'pink'
  },
  {
    titulo: 'xenofeminism: a politics for alienation',
    autor: 'laboria cuboniks',
    descricao: 'manifesto contemporâneo sobre tecnologia e feminismo',
    url: 'https://laboriacuboniks.net/',
    cor: 'blue'
  },
  {
    titulo: 'glitch feminism',
    autor: 'legacy russell',
    descricao: 'sobre o poder dos erros e falhas digitais',
    cor: 'purple'
  },
  {
    titulo: 'zeros and ones',
    autor: 'sadie plant',
    descricao: 'mulheres e a revolução digital',
    cor: 'orange'
  }
];
