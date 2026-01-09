// src/app/components/DetalhesCarta.tsx
import { CartaTarot } from '../../data/tarot';

interface DetalhesCartaProps {
  carta: CartaTarot;
}

export function DetalhesCarta({ carta }: DetalhesCartaProps) {
  return (
    <>
      <div className="bg-cyber-dark/50 border-2 border-neon-pink rounded-lg p-8 backdrop-blur-sm animate-[fadeIn_0.5s_ease-out]">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Imagem */}
          <div className="w-full md:w-1/3 flex-shrink-0">
            <div className="aspect-[2/3] rounded-lg overflow-hidden border-2 border-neon-pink">
              <img 
                src={carta.imagem}
                alt={carta.nome}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Mensagem */}
          <div className="flex-1">
            <h3 className="text-3xl text-neon-orange mb-6 glitch-text">
              {carta.nome}
            </h3>
            <p className="text-neon-blue text-base leading-relaxed mb-6">
              {carta.mensagem}
            </p>
            
            <div className="mt-8 pt-6 border-t border-neon-purple/30">
              <p className="text-neon-purple/80 text-sm italic">
                medite sobre esta mensagem e permita que ela guie seu caminho cibernético ִ ࣪𖤐
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Keyframes inline */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
