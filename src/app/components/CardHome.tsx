// src/app/components/CardHome.tsx
import { Link } from 'react-router-dom';
import { SecaoHome } from '../../data/home';

interface CardHomeProps {
  secao: SecaoHome;
  tamanho?: 'grande' | 'pequeno';
}

export function CardHome({ secao, tamanho = 'pequeno' }: CardHomeProps) {
  const isGrande = tamanho === 'grande';
  
  // Extrair só a classe de texto (remove border e hover)
  const textColor = secao.corClasse.split(' ').find(c => c.startsWith('text-')) || 'text-neon-pink';

  return (
    <Link 
      to={secao.link}
      className={`group ${isGrande ? 'md:col-span-2 md:row-span-2 p-4' : ''} p-2`}
    >
      <div className={`
        ${isGrande ? 'aspect-[3/4]' : 'aspect-square'} 
        border-2 ${secao.corClasse}
        rounded-lg overflow-hidden 
        hover:border-neon-pink hover:scale-105
        transition-all duration-300 relative
      `}>
        {/* Imagem */}
        <img 
          src={secao.imagem}
          alt={secao.titulo}
          loading={isGrande ? 'eager' : 'lazy'}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        
        {/* Gradiente sempre visível */}
        <div className={`
          absolute inset-0 
          bg-gradient-to-t from-cyber-dark 
          ${isGrande ? 'via-cyber-dark/50' : 'via-cyber-dark/30'}
          to-transparent 
          pointer-events-none
        `} />
        
        {/* Texto - USA textColor + glitch-text se for grande */}
        <div className={`absolute ${isGrande ? 'bottom-4 left-4 right-4' : 'bottom-3 left-3 right-3'}`}>
          <h3 className={`${textColor} ${isGrande ? 'text-2xl mb-2 glitch-text' : 'text-sm font-medium'}`}>
            {secao.titulo}
          </h3>
          {isGrande && (
            <p className="text-neon-blue text-sm">{secao.subtitulo}</p>
          )}
        </div>
        
        {/* Overlay hover - USA textColor */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <p className={`${textColor} text-sm font-bold`}>
            acessar →
          </p>
        </div>
      </div>
    </Link>
  );
}
