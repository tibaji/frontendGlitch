// src/app/components/ExposicaoArquivadaCard.tsx
import { ExternalLink, Calendar, Users } from 'lucide-react';
import { ExposicaoArquivada } from '../../data/exposicoes';
import { useState } from 'react';

interface ExposicaoArquivadaCardProps {
  exposicao: ExposicaoArquivada;
}

const corMap = {
  pink: {
    text: 'text-neon-pink',
    border: 'border-neon-pink',
    overlay: 'bg-neon-pink/20'
  },
  blue: {
    text: 'text-neon-blue',
    border: 'border-neon-blue',
    overlay: 'bg-neon-blue/20'
  },
  purple: {
    text: 'text-neon-purple',
    border: 'border-neon-purple',
    overlay: 'bg-neon-purple/20'
  },
  orange: {
    text: 'text-neon-orange',
    border: 'border-neon-orange',
    overlay: 'bg-neon-orange/20'
  },
  green: {
    text: 'text-[#00ff41]',
    border: 'border-[#00ff41]',
    overlay: 'bg-[#00ff41]/20'
  }
};

export function ExposicaoArquivadaCard({ exposicao }: ExposicaoArquivadaCardProps) {
  const [imagemErro, setImagemErro] = useState(false);
  const cores = corMap[exposicao.cor];

  return (
    <article>
      <a
        href={exposicao.linkExterno}
        target="_blank"
        rel="noopener noreferrer"
        className="block group focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-offset-2 focus:ring-offset-cyber-dark rounded-xl"
        aria-label={`Ver exposição arquivada: ${exposicao.titulo}`}
      >
        <div className="bg-cyber-dark/50 border-2 border-neon-blue rounded-xl overflow-hidden backdrop-blur-sm hover:border-neon-pink transition-all">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Thumbnail */}
            <div className="relative aspect-video md:aspect-square overflow-hidden bg-cyber-dark">
              {!imagemErro ? (
                <>
                  <img 
                    src={exposicao.thumbnail}
                    alt={`Thumbnail da exposição ${exposicao.titulo}`}
                    loading="lazy"
                    onError={() => setImagemErro(true)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 ${cores.overlay} opacity-20 group-hover:opacity-40 transition-opacity`} />
                </>
              ) : (
                <div className={`w-full h-full flex items-center justify-center ${cores.overlay}`}>
                  <span className={`text-4xl ${cores.text}`}>📦</span>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="md:col-span-2 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className={`text-3xl glitch-text group-hover:text-neon-pink transition-colors ${cores.text}`}>
                    {exposicao.titulo}
                  </h2>
                  <ExternalLink 
                    className="w-6 h-6 text-neon-purple group-hover:text-neon-orange transition-colors flex-shrink-0"
                    aria-hidden="true"
                  />
                </div>

                <div className="flex items-center gap-4 mb-4 text-sm text-neon-blue/60">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>{exposicao.periodo}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" aria-hidden="true" />
                    <span>{exposicao.artistas.length} {exposicao.artistas.length === 1 ? 'artista' : 'artistas'}</span>
                  </div>
                </div>

                <p className="text-neon-purple/80 mb-4">
                  {exposicao.descricao}
                </p>

                <ul className="flex flex-wrap gap-2" aria-label="Lista de artistas">
                  {exposicao.artistas.map((artista) => (
                    <li key={artista}>
                      <span className="text-xs px-3 py-1 rounded-full border border-neon-blue/30 text-neon-blue">
                        {artista}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4">
                <span className={`inline-flex items-center gap-2 text-sm font-bold group-hover:gap-4 transition-all ${cores.text}`}>
                  visitar exposição arquivada
                  <span aria-hidden="true">→</span>
                  <span className="sr-only">(abre em nova aba)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </a>
    </article>
  );
}
