// src/app/pages/exposicoes/Arquivo.tsx
import { exposicoesArquivadas } from '../../../data/exposicoes';
import { ExposicaoArquivadaCard } from '../../components/ExpoArquivadaCard';

export function Arquivo() {
  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-neon-orange glitch-text mb-4">
            arquivo
          </h1>
          <p className="text-neon-purple text-xl mb-4">
            exposições passadas da galeria_glitch
          </p>
          <div className="inline-block bg-cyber-dark/50 border-2 border-neon-blue rounded-lg p-4 backdrop-blur-sm">
            <p className="text-neon-blue text-sm">
              📦 cada exposição vive em seu próprio tempo-espaço digital
            </p>
          </div>
        </header>

        {/* Grid de Exposições Arquivadas */}
        <section 
          className="space-y-8 mb-16"
          aria-label="Exposições arquivadas"
        >
          {exposicoesArquivadas.length > 0 ? (
            exposicoesArquivadas.map((expo) => (
              <ExposicaoArquivadaCard key={expo.id} exposicao={expo} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="text-neon-purple/60 text-xl">
                nenhuma exposição arquivada ainda...
              </p>
            </div>
          )}
        </section>

        {/* Nota sobre preservação */}
        <aside className="bg-cyber-dark/50 border-2 border-neon-purple rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-2xl text-neon-pink mb-4 glitch-text">
            sobre o arquivo
          </h2>
          <div className="space-y-3 text-neon-purple/80 leading-relaxed">
            <p>
              cada exposição da galeria_glitch existe como um artefato digital único, 
              preservado em seu próprio espaço-tempo na web.
            </p>
            <p>
              ao invés de sobrescrever o passado, criamos camadas de memória digital - 
              cada mostra permanece acessível como era originalmente concebida.
            </p>
            <blockquote className="text-neon-orange text-sm italic mt-4">
              <p>"a internet não esquece, e nós celebramos isso"</p>
            </blockquote>
          </div>
        </aside>
      </div>
    </div>
  );
}
