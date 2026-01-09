// src/data/zine.ts

export interface PaginaZine {
  id: number;
  titulo: string;
  conteudo: string;
}

export interface InfoZine {
  titulo: string;
  subtitulo: string;
  imagemCapa: string;
  descricao: string;
  linkDownload: string;
  licenca: string;
  linkLicenca: string;
  ano: number;
}

export const paginasZine: PaginaZine[] = [
  {
    id: 1,
    titulo: 'manifesto',
    conteudo: 'somos híbridas, somos código e carne, somos o futuro que já existe. sem fronteiras que não sejam pontes'
  },
  {
    id: 2,
    titulo: 'territórios em guerra',
    conteudo: 'é uma guerra nas estrelas. meus pés estão no chão. as cabeças sobre as nuvens'
  },
  {
    id: 3,
    titulo: 'sereia dos pixels?',
    conteudo: 'nada que não passe de pixels numa tela. tudo que seja real. aconteça o que aconteça,'
  },
  {
    id: 4,
    titulo: 'alucinações',
    conteudo: 'o que é mais carne que a carne? ora, só pode ser a palavra'
  }
];

export const infoZine: InfoZine = {
  titulo: 'zine dos ciborgues',
  subtitulo: 'fanzine cibernética sobre corpos, tecnologia e resistência',
  imagemCapa: '/images/printZine.jpg',
  descricao: 'ciborgues do século xxi - chave, 2025',
  linkDownload: 'https://drive.google.com/file/d/1qrftGlzLG6vLWrim5Ck3rD0AIFPwAB1b/view?usp=drive_link',
  licenca: 'creative commons BY-NC-SA 4.0',
  linkLicenca: 'https://creativecommons.org/licenses/by-nc-sa/4.0/deed.pt',
  ano: 2025
};
