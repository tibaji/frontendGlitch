// src/app/components/GridObras.tsx
import { CirculosTexto } from './CirculosTexto';

interface GridObrasProps {
  titulo: string;
  descricao: string;
  numeroObras?: number;
  ano: string;
}

export function GridObras({ titulo, descricao, numeroObras = 9, ano }: GridObrasProps) {
  return (
    <div className="w-full px-8 md:px-16 lg:px-24 py-20 bg-cyber-dark/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Grid de imagens */}
          <div className="grid grid-cols-3 gap-4">
            {Array.from({ length: numeroObras }).map((_, index) => (
              <div 
                key={index}
                className="aspect-square border border-neon-purple/30 rounded overflow-hidden hover:border-neon-green transition-all"
              >
                <img 
                  src={`https://picsum.photos/seed/grid${index + 1}/300/300`}
                  alt={`fragmento ${index + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          {/* Texto */}
          <div className="space-y-6 relative">
            <CirculosTexto tamanho="grande" posicao="direita" opacity={0.6} />
            
            <h2 className="text-4xl text-white mb-4 relative z-10">
              {titulo}
            </h2>
            <p className="text-gray-300 leading-relaxed relative z-10">
              {descricao}
            </p>
            <p className="text-neon-green text-sm relative z-10">
              {ano} • série de {numeroObras} fotografias
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
