// src/app/components/CirculosTexto.tsx
interface CirculosTextoProps {
  tamanho?: 'pequeno' | 'medio' | 'grande';
  posicao?: 'esquerda' | 'direita';
  opacity?: number;
}

export function CirculosTexto({ 
  tamanho = 'medio', 
  posicao = 'esquerda',
  opacity = 1 
}: CirculosTextoProps) {
  const tamanhos = {
    pequeno: { width: 'w-48 h-48', viewBox: '0 0 200 200', raios: [80, 65, 50, 35, 20] },
    medio: { width: 'w-64 h-64', viewBox: '0 0 280 280', raios: [120, 95, 70, 50, 30] },
    grande: { width: 'w-80 h-80', viewBox: '0 0 320 320', raios: [140, 110, 80, 55, 35] }
  };

  const config = tamanhos[tamanho];
  const center = parseInt(config.viewBox.split(' ')[2]) / 2;

  const posicaoClass = posicao === 'esquerda' ? '-left-32' : '-right-40';

  return (
    <div 
      className={`absolute ${posicaoClass} top-0 hidden xl:block`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className={`relative ${config.width}`}>
        <svg viewBox={config.viewBox} className="w-full h-full">
          <defs>
            {config.raios.map((raio, index) => (
              <path
                key={index}
                id={`circle-${tamanho}-${index}`}
                d={`M ${center}, ${center} m -${raio}, 0 a ${raio},${raio} 0 1,1 ${raio * 2},0 a ${raio},${raio} 0 1,1 -${raio * 2},0`}
              />
            ))}
          </defs>
          
          {/* Texto nos círculos */}
          <text className="text-[9px] fill-neon-green uppercase tracking-[0.3em] font-light">
            <textPath href={`#circle-${tamanho}-0`} startOffset="0%">
              corpo digital • ciberfeminismo • glitch art • resistência •
            </textPath>
          </text>
          
          <text className="text-[8px] fill-neon-purple uppercase tracking-[0.25em] font-light">
            <textPath href={`#circle-${tamanho}-1`} startOffset="0%">
              tecnologia • arte • identidade • transformação •
            </textPath>
          </text>
          
          <text className="text-[8px] fill-neon-green uppercase tracking-[0.2em] font-light">
            <textPath href={`#circle-${tamanho}-2`} startOffset="0%">
              exposição • 2026 • galeria_glitch •
            </textPath>
          </text>
          
          <text className="text-[7px] fill-neon-purple uppercase tracking-[0.15em] font-light">
            <textPath href={`#circle-${tamanho}-3`} startOffset="0%">
              cyber • feminist • art •
            </textPath>
          </text>
          
          <text className="text-[6px] fill-white uppercase font-light">
            <textPath href={`#circle-${tamanho}-4`} startOffset="0%">
              • • • •
            </textPath>
          </text>
        </svg>
        
        {/* Ponto central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full" />
        </div>
      </div>
    </div>
  );
}
