// src/app/components/ObraDestaque.tsx
import { Obra } from '../../data/exposicoes';
import { CirculosTexto } from './CirculosTexto';

interface ObraDestaqueProps {
  obra: Obra;
  layout?: 'esquerda' | 'direita';
  mostrarCirculos?: boolean;
}

export function ObraDestaque({ obra, layout = 'direita', mostrarCirculos = true }: ObraDestaqueProps) {
  const isEsquerda = layout === 'esquerda';

  return (
    <div className="w-full px-8 md:px-16 lg:px-24 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <div className={`space-y-6 relative ${isEsquerda ? 'lg:order-1' : 'lg:order-2'}`}>
            {mostrarCirculos && <CirculosTexto posicao={isEsquerda ? 'esquerda' : 'direita'} />}
            
            <h2 className="text-4xl text-white mb-4">
              {obra.titulo}
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              {obra.descricao}
            </p>
            <p className="text-neon-green text-sm">
              {obra.ano} • {obra.tecnica}
              {obra.dimensoes && ` • ${obra.dimensoes}`}
            </p>
          </div>

          {/* Imagem */}
          <div className={`relative group ${isEsquerda ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="aspect-[4/5] border-2 border-neon-purple rounded-lg overflow-hidden group-hover:border-neon-green transition-all">
              <img 
                src={obra.imagem}
                alt={obra.titulo}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
