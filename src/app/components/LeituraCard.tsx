// src/app/components/LeituraCard.tsx
import { ExternalLink } from 'lucide-react';
import { Leitura } from '../../data/ciberespacos';

interface LeituraCardProps {
  leitura: Leitura;
}

const corMap = {
  pink: 'border-neon-pink',
  blue: 'border-neon-blue',
  purple: 'border-neon-purple',
  orange: 'border-neon-orange'
};

export function LeituraCard({ leitura }: LeituraCardProps) {
  const borderClass = corMap[leitura.cor];

  const content = (
    <div className={`border-l-4 ${borderClass} pl-4 py-3 rounded-r-xl bg-cyber-dark/30 transition-all ${
      leitura.url ? 'hover:bg-cyber-dark/50 cursor-pointer' : ''
    }`}>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h4 className="text-neon-orange mb-1">
            {leitura.titulo}
          </h4>
          <p className="text-neon-blue text-sm mb-2">
            {leitura.autor}
          </p>
          <p className="text-neon-purple/80 text-sm">
            {leitura.descricao}
          </p>
        </div>
        {leitura.url && (
          <ExternalLink 
            className="w-4 h-4 text-neon-purple ml-3 flex-shrink-0" 
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );

  if (leitura.url) {
    return (
      <a
        href={leitura.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`Ler ${leitura.titulo} por ${leitura.autor}`}
      >
        {content}
      </a>
    );
  }

  return content;
}
