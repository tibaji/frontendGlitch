// src/data/exposicoes.ts

// ============================================
// TIPOS E INTERFACES
// ============================================

/**
 * Propriedades comuns a todas as exposições
 */
export interface ExposicaoBase {
  id: string;
  titulo: string;
  periodo: string;
  artistas: string[];
  descricao: string;
  thumbnail: string;
  cor: 'pink' | 'blue' | 'purple' | 'orange' | 'green';
}

/**
 * Obra de arte em uma exposição
 */
export interface Obra {
  id: string;
  titulo: string;
  artista: string;
  imagem: string;
  descricao: string;
  ano: number;
  tecnica?: string;
  dimensoes?: string;
  cor?: 'pink' | 'blue' | 'purple' | 'orange' | 'green';
}

/**
 * Exposição ativa (em andamento)
 */
export interface ExposicaoAtiva extends ExposicaoBase {
  tipo: 'ativa';
  dataInicio: string;
  dataFim: string;
  obras: Obra[];
  curadores?: string[];
  local?: string;
  horario?: string;
}

/**
 * Exposição arquivada (passada)
 */
export interface ExposicaoArquivada extends ExposicaoBase {
  tipo: 'arquivada';
  linkExterno: string;
}

// ============================================
// EXPOSIÇÕES ATIVAS
// ============================================

export const exposicoesAtivas: ExposicaoAtiva[] = [
  {
    tipo: 'ativa',
    id: '2026-1',
    titulo: 'futuros impossíveis',
    periodo: 'jan - jun 2026',
    artistas: ['tibaji chave', 'elvira cachorra'],
    descricao: 'explorando utopias digitais, distopias presentes e realidades aumentadas através da arte glitch e ciberfeminista',
    thumbnail: 'https://picsum.photos/seed/expo2026-1/800/600',
    cor: 'pink',
    dataInicio: '2026-01-15',
    dataFim: '2026-06-30',
    curadores: ['coletiva galeria_glitch'],
    local: 'espaço virtual - galeria_glitch.art',
    horario: '24/7 - acesso livre',
    obras: [
      {
        id: 'obra-1',
        titulo: 'ciborgue sonhadora',
        artista: 'tibaji chave',
        imagem: 'https://picsum.photos/seed/obra1/800/600',
        descricao: 'instalação interativa sobre identidades híbridas e devires cibernéticos',
        ano: 2026,
        tecnica: 'mixed media digital',
        dimensoes: 'variável'
      },
      {
        id: 'obra-2',
        titulo: 'memórias sintéticas',
        artista: 'elvira cachorra',
        imagem: 'https://picsum.photos/seed/obra2/800/600',
        descricao: 'série fotográfica manipulada sobre nostalgia futurista',
        ano: 2026,
        tecnica: 'fotografia digital glitchada',
        dimensoes: '100x150cm (cada)'
      }
    ]
  },
  {
    tipo: 'ativa',
    id: '2026-2',
    titulo: 'rastros digitais',
    periodo: 'jan - jun 2026',
    artistas: ['kira neural', 'byte dreams collective'],
    descricao: 'uma investigação poética sobre memória, identidade e arquivo na era digital. o que resta quando os dados corrompem?',
    thumbnail: 'https://picsum.photos/seed/rastros/800/600',
    cor: 'purple',
    dataInicio: '2026-01-15',
    dataFim: '2026-06-30',
    curadores: ['ana glitch'],
    local: 'espaço virtual - galeria_glitch.art',
    horario: '24/7 - acesso livre',
    obras: [
      {
        id: 'rd-01',
        titulo: 'fragmentos de RAM',
        artista: 'kira neural',
        imagem: 'https://picsum.photos/seed/fragmentos/800/1000',
        descricao: 'memórias corrompidas de um disco rígido antigo revelam histórias pessoais entrelaçadas com código obsoleto',
        ano: 2025,
        tecnica: 'arte digital glitch, manipulação de dados',
        dimensoes: '4096 x 5120 pixels',
        cor: 'purple'
      },
      {
        id: 'rd-02',
        titulo: 'nostalgia.exe',
        artista: 'byte dreams collective',
        imagem: 'https://picsum.photos/seed/nostalgia/1200/800',
        descricao: 'um arquivo executável que não roda mais. sentimentos codificados em linguagens esquecidas',
        ano: 2026,
        tecnica: 'pixel art, programação criativa',
        dimensoes: '3840 x 2160 pixels',
        cor: 'blue'
      },
      {
        id: 'rd-03',
        titulo: 'cache emocional',
        artista: 'kira neural',
        imagem: 'https://picsum.photos/seed/cache/900/1200',
        descricao: 'dados temporários que insistem em permanecer. o que guardamos quando não queremos esquecer?',
        ano: 2025,
        tecnica: 'fotografia digital manipulada, overlays de código',
        dimensoes: '3000 x 4000 pixels',
        cor: 'purple'
      },
      {
        id: 'rd-04',
        titulo: 'backup imperfeito',
        artista: 'byte dreams collective',
        imagem: 'https://picsum.photos/seed/backup/1000/1000',
        descricao: 'tentativas falhas de preservar o passado. algumas perdas são inevitáveis, mesmo em sistemas digitais',
        ano: 2026,
        tecnica: 'colagem digital, simulação de corrupção de arquivos',
        dimensoes: '2400 x 2400 pixels',
        cor: 'pink'
      },
      {
        id: 'rd-05',
        titulo: 'algoritmo sentimental',
        artista: 'kira neural',
        imagem: 'https://picsum.photos/seed/algoritmo/1400/900',
        descricao: 'pode uma máquina sentir saudade? explorando emoções através de padrões computacionais',
        ano: 2025,
        tecnica: 'generative art, neural networks',
        dimensoes: '4200 x 2700 pixels',
        cor: 'blue'
      },
      {
        id: 'rd-06',
        titulo: 'arquivo corrompido #3',
        artista: 'byte dreams collective',
        imagem: 'https://picsum.photos/seed/corrompido/800/1400',
        descricao: 'beleza encontrada no erro. quando o sistema falha, surgem novas formas de ver',
        ano: 2026,
        tecnica: 'databending, distorção digital',
        dimensoes: '2800 x 4900 pixels',
        cor: 'purple'
      }
    ]
  }
];
  // ============================================
  // TEMPLATE PARA ADICIONAR MAIS EXPOSIÇÕES
  // ============================================
  // {
  //   tipo: 'ativa',
  //   id: '2026-2',
  //   titulo: 'TÍTULO DA EXPOSIÇÃO',
  //   periodo: 'jul - dez 2026',
  //   artistas: ['artista 1', 'artista 2'],
  //   descricao: 'Descrição da exposição',
  //   thumbnail: 'URL_DA_IMAGEM',
  //   cor: 'blue',
  //   dataInicio: '2026-07-01',
  //   dataFim: '2026-12-31',
  //   curadores: ['curador(a)'],
  //   local: 'local da exposição',
  //   horario: 'horário de visitação',
  //   obras: [
  //     {
  //       id: 'obra-x',
  //       titulo: 'Título da obra',
  //       artista: 'Nome do artista',
  //       imagem: 'URL_DA_IMAGEM',
  //       descricao: 'Descrição da obra',
  //       ano: 2026,
  //       tecnica: 'técnica utilizada',
  //       dimensoes: 'dimensões'
  //     }
  //   ]
  // }

// ============================================
// EXPOSIÇÕES ARQUIVADAS
// ============================================

export const exposicoesArquivadas: ExposicaoArquivada[] = [
  {
    tipo: 'arquivada',
    id: '2025-2',
    titulo: 'ciborgues em revolta',
    periodo: 'jul - dez 2025',
    artistas: ['luna cyber', 'byte rosa', 'nyx protocol'],
    descricao: 'primeira exposição coletiva da galeria_glitch explorando identidades digitais e resistências ciberfeministas',
    linkExterno: 'https://arquivo.galeria-glitch.art/2025-2',
    thumbnail: 'https://picsum.photos/seed/expo2025-2/800/600',
    cor: 'pink'
  },
  {
    tipo: 'arquivada',
    id: '2025-1',
    titulo: 'glitch manifesto',
    periodo: 'jan - jun 2025',
    artistas: ['tibaji chave', 'digital flora'],
    descricao: 'mostra inaugural sobre arte glitch e ciberfeminismo. o erro como estética, o bug como manifesto político',
    linkExterno: 'https://arquivo.galeria-glitch.art/2025-1',
    thumbnail: 'https://picsum.photos/seed/expo2025-1/800/600',
    cor: 'blue'
  },
  {
    tipo: 'arquivada',
    id: '2024-2',
    titulo: 'memórias sintéticas',
    periodo: 'jul - dez 2024',
    artistas: ['pixel queer', 'hack violet', 'glitch angel'],
    descricao: 'investigação sobre memória digital, nostalgia futurista e arquivos virtuais',
    linkExterno: 'https://arquivo.galeria-glitch.art/2024-2',
    thumbnail: 'https://picsum.photos/seed/expo2024-2/800/600',
    cor: 'purple'
  },
  // ============================================
  // TEMPLATE PARA ADICIONAR MAIS ARQUIVADAS
  // ============================================
  // {
  //   tipo: 'arquivada',
  //   id: 'ANO-NUMERO',
  //   titulo: 'TÍTULO DA EXPOSIÇÃO',
  //   periodo: 'mês - mês ano',
  //   artistas: ['artista 1', 'artista 2'],
  //   descricao: 'Descrição da exposição arquivada',
  //   linkExterno: 'https://link-para-site-arquivado.com',
  //   thumbnail: 'URL_DA_IMAGEM',
  //   cor: 'orange'
  // }
];

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

/**
 * Retorna todas as exposições (ativas + arquivadas)
 */
export const todasExposicoes = [...exposicoesAtivas, ...exposicoesArquivadas];

/**
 * Busca uma exposição pelo ID
 */
export const buscarExposicaoPorId = (id: string): ExposicaoAtiva | ExposicaoArquivada | undefined => {
  return todasExposicoes.find(expo => expo.id === id);
};

/**
 * Busca exposições por artista
 */
export const exposicoesPorArtista = (nomeArtista: string): (ExposicaoAtiva | ExposicaoArquivada)[] => {
  return todasExposicoes.filter(expo => 
    expo.artistas.some(artista => 
      artista.toLowerCase().includes(nomeArtista.toLowerCase())
    )
  );
};

/**
 * Retorna apenas exposições de uma cor específica
 */
export const exposicoesPorCor = (cor: ExposicaoBase['cor']): (ExposicaoAtiva | ExposicaoArquivada)[] => {
  return todasExposicoes.filter(expo => expo.cor === cor);
};

/**
 * Verifica se uma exposição está acontecendo agora
 */
export const exposicaoEstaAtiva = (exposicao: ExposicaoAtiva): boolean => {
  const hoje = new Date();
  const inicio = new Date(exposicao.dataInicio);
  const fim = new Date(exposicao.dataFim);
  
  return hoje >= inicio && hoje <= fim;
};

/**
 * Retorna todas as obras de uma exposição ativa
 */
export const obrasDeExposicao = (exposicaoId: string): Obra[] => {
  const exposicao = buscarExposicaoPorId(exposicaoId);
  
  if (exposicao && exposicao.tipo === 'ativa') {
    return exposicao.obras;
  }
  
  return [];
};
