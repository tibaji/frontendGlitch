// src/app/components/LinkCard.tsx
import { ExternalLink, Globe, Users, Archive, MessageSquare, Zap, LucideIcon } from 'lucide-react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../data/ciberespacos';

interface LinkCardProps {
  link: Link;
}

const iconMap: Record<string, LucideIcon> = {
  globe: Globe,
  users: Users,
  archive: Archive,
  'message-square': MessageSquare,
  zap: Zap
};

export function LinkCard({ link }: LinkCardProps) {
  const Icon = iconMap[link.icone] || Globe;
  
  const cardClasses = "bg-cyber-dark/50 border-2 border-neon-blue rounded-lg p-6 backdrop-blur-sm hover:border-neon-pink hover:scale-105 transition-all group";

  const content = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="text-neon-blue group-hover:text-neon-pink transition-colors">
          <Icon className="w-6 h-6" aria-hidden="true" />
        </div>
        {link.externo && (
          <ExternalLink 
            className="w-4 h-4 text-neon-purple group-hover:text-neon-orange transition-colors" 
            aria-hidden="true"
          />
        )}
      </div>
      
      <h3 className="text-neon-pink mb-2 text-lg group-hover:text-neon-orange transition-colors">
        {link.titulo}
      </h3>
      
      <p className="text-neon-purple/80 text-sm">
        {link.descricao}
      </p>
      
      {link.externo && (
        <span className="sr-only">(abre em nova aba)</span>
      )}
    </>
  );

  if (link.externo) {
    return (
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cardClasses}
        aria-label={`${link.titulo}: ${link.descricao}`}
      >
        {content}
      </a>
    );
  }

  return (
    <RouterLink
      to={link.url}
      className={cardClasses}
      aria-label={`${link.titulo}: ${link.descricao}`}
    >
      {content}
    </RouterLink>
  );
}
