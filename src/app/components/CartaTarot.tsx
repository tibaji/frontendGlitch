// src/app/components/CartaTarot.tsx
import { Sparkles } from 'lucide-react';
import { CartaTarot as CartaTarotType } from '../../data/tarot';

interface CartaTarotProps {
  carta: CartaTarotType;
  index: number;
  isSelected: boolean;
  isShuffling: boolean;
  shuffleKey: number;
  onClick: (id: number) => void;
}

export function CartaTarot({ 
  carta, 
  index, 
  isSelected, 
  isShuffling, 
  shuffleKey,
  onClick 
}: CartaTarotProps) {
  return (
    <div
      key={`${carta.id}-${shuffleKey}`}
      onClick={() => onClick(carta.id)}
      style={{
        animationDelay: `${index * 100}ms`,
        perspective: '1000px'
      }}
      className={`
        aspect-[2/3] cursor-pointer transition-all duration-500 
        ${isSelected ? 'border-neon-pink scale-105' : 'border-neon-purple hover:border-neon-blue'}
        border-2 rounded-lg relative overflow-hidden group 
        ${isShuffling ? 'animate-bounce' : ''}
      `}
    >
      <div 
        style={{
          transformStyle: 'preserve-3d',
          transition: 'transform 0.7s'
        }}
        className={`w-full h-full ${isSelected ? '[transform:rotateY(180deg)]' : ''}`}
      >
        {/* Frente (verso fechado) */}
        <div 
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-neon-purple/20 to-neon-blue/20 group-hover:from-neon-blue/30 group-hover:to-neon-purple/30 transition-all rounded-lg"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,0,110,0.1)_10px,rgba(255,0,110,0.1)_20px)]" />
          </div>
          <Sparkles className="w-12 h-12 mb-4 text-neon-purple group-hover:text-neon-blue transition-colors relative z-10" />
          <p className="text-center text-neon-purple group-hover:text-neon-blue transition-colors relative z-10 text-sm">
            carta {index + 1}
          </p>
        </div>

        {/* Verso (carta revelada) */}
        <div 
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
          className="absolute inset-0 rounded-lg overflow-hidden"
        >
          <img 
            src={carta.imagem}
            alt={carta.nome}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://via.placeholder.com/300x500/1a0033/ff006e?text=${carta.nome}`;
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/80 to-transparent" />
          
          <div className="absolute inset-0 p-6 flex flex-col items-center justify-end">
            <Sparkles className="w-8 h-8 mb-3 text-neon-pink animate-pulse" />
            <p className="text-center text-neon-orange font-bold text-lg">
              {carta.nome}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
