// src/app/components/StateSection.tsx
import { Obra } from '../../data/exposicoes';

interface StateSectionProps {
  obra: Obra;
  index: number;
  total: number;
}

const corMap = {
  pink: 'text-neon-pink',
  blue: 'text-neon-blue',
  purple: 'text-neon-purple',
  orange: 'text-neon-orange',
  green: 'text-[#00ff41]'
};

export function StateSection({ obra, index, total }: StateSectionProps) {
  const isEsquerda = index % 2 === 0;
  const corClass = corMap[obra.cor as keyof typeof corMap] || corMap.purple;

  return (
    <div className="w-full min-h-screen flex items-center px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className={`grid lg:grid-cols-12 gap-12 items-center ${
          isEsquerda ? '' : 'lg:grid-flow-dense'
        }`}>
          {/* Imagem */}
          <div className={`lg:col-span-7 ${isEsquerda ? '' : 'lg:col-start-6'}`}>
            <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/10">
              <img 
                src={obra.imagem}
                alt={obra.titulo}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className={`lg:col-span-5 space-y-6 ${
            isEsquerda ? '' : 'lg:col-start-1 lg:row-start-1'
          }`}>
            <div>
              <span className={`text-xs uppercase tracking-[0.3em] font-light ${corClass}`}>
                state {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-5xl md:text-6xl text-white leading-tight">
                {obra.titulo}
              </h3>
              {obra.tecnica && (
                <p className={`text-xl italic ${corClass}`}>
                  {obra.tecnica}
                </p>
              )}
            </div>

            <div className="pt-4">
              <p className="text-gray-400 text-base leading-relaxed italic">
                {obra.descricao}
              </p>
            </div>

            {/* Linha decorativa */}
            <div className="pt-6">
              <div className={`w-24 h-px ${corClass.replace('text-', 'bg-')}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
