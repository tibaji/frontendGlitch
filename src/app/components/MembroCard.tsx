// src/components/MembroCard.tsx
import { ExternalLink, Instagram } from 'lucide-react';
import { MembroEquipe } from '../../data/equipe';

interface MembroCardProps {
  membro: MembroEquipe;
}

const corMap = {
  pink: {
    border: 'border-neon-pink',
    badge: 'bg-neon-pink/20 border-neon-pink text-neon-pink',
    hover: 'hover:text-neon-pink',
    text: 'text-neon-pink'
  },
  blue: {
    border: 'border-neon-blue',
    badge: 'bg-neon-blue/20 border-neon-blue text-neon-blue',
    hover: 'hover:text-neon-blue',
    text: 'text-neon-blue'
  },
  purple: {
    border: 'border-neon-purple',
    badge: 'bg-neon-purple/20 border-neon-purple text-neon-purple',
    hover: 'hover:text-neon-purple',
    text: 'text-neon-purple'
  },
  green: {
    border: 'border-[#00ff41]',
    badge: 'bg-[#00ff41]/20 border-[#00ff41] text-[#00ff41]',
    hover: 'hover:text-[#00ff41]',
    text: 'text-[#00ff41]'
  }
};

export function MembroCard({ membro }: MembroCardProps) {
  const cores = corMap[membro.cor as keyof typeof corMap] || corMap.pink;
  
  // Extrair handle do Instagram
  const instagramHandle = membro.links.instagram.split('/').filter(Boolean).pop();

  return (
    <article className="group">
      <div className={`bg-cyber-dark/50 border-2 ${cores.border} rounded-lg overflow-hidden backdrop-blur-sm hover:scale-105 transition-all duration-300`}>
        {/* Imagem */}
        <div className="aspect-square overflow-hidden relative">
          <img 
            src={membro.imagem}
            alt={`Foto de ${membro.nome}`}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-60" />
          
          {/* Badge do papel */}
          <div className="absolute top-4 right-4">
            <span className={`px-3 py-1 text-xs rounded-full backdrop-blur-sm font-medium border ${cores.badge}`}>
              {membro.papel}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="p-6">
          <h3 className={`text-2xl text-white mb-2 transition-colors ${cores.hover}`}>
            {membro.nome}
          </h3>
          <p className="text-gray-400 text-sm mb-4 leading-relaxed">
            {membro.bio}
          </p>

          {/* Links */}
          <div className={`flex flex-col gap-2 pt-4 border-t border-${membro.cor}-500/30`}>
            <a 
              href={membro.links.instagram}
              className={`inline-flex items-center gap-2 text-xs ${cores.text} hover:opacity-70 transition-opacity`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${membro.nome}`}
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              <span>@{instagramHandle}</span>
              <ExternalLink className="w-3 h-3 ml-auto" aria-hidden="true" />
            </a>
            <a 
              href={membro.links.site}
              className={`inline-flex items-center gap-2 text-xs ${cores.text} hover:opacity-70 transition-opacity`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Site de ${membro.nome}`}
            >
              <span>🌐</span>
              <span>{membro.links.siteDisplay || membro.links.site.replace(/^https?:\/\//, '')}</span>
              <ExternalLink className="w-3 h-3 ml-auto" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
