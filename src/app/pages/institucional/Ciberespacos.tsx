// src/app/pages/institucional/Ciberespacos.tsx
import { links, leituras } from '../../../data/ciberespacos';
import { LinkCard } from '../../components/LinkCard';
import { LeituraCard } from '../../components/LeituraCard';

export function Ciberespacos() {
  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-neon-orange glitch-text mb-4">
            ciberespaços
          </h1>
          <p className="text-neon-purple text-xl">
            links, referências e recursos ciberfeministas
          </p>
        </header>

        {/* Grid de Links */}
        <section 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          aria-label="Links para recursos externos e páginas internas"
        >
          {links.map((link, index) => (
            <LinkCard key={index} link={link} />
          ))}
        </section>

        {/* Leituras Recomendadas */}
        <section className="bg-cyber-dark/50 border-2 border-neon-purple rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl text-neon-blue mb-6 glitch-text">
            leituras recomendadas
          </h2>
          
          <div className="space-y-4">
            {leituras.map((leitura, index) => (
              <LeituraCard key={index} leitura={leitura} />
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-neon-purple/30 text-center">
            <p className="text-neon-purple/60 text-sm">
              📚 quer sugerir mais leituras?{' '}
              <a 
                href="/contato" 
                className="text-neon-pink hover:text-neon-orange transition-colors underline"
              >
                entre em contato
              </a>
            </p>
          </div>
        </section>

        {/* Citação */}
        <aside className="mt-16 text-center">
          <blockquote className="text-neon-purple/80 italic text-lg max-w-3xl mx-auto">
            <p>"o ciberespaço é um espaço híbrido onde novas formas de vida e comunidade são possíveis"</p>
            <cite className="text-neon-orange text-sm not-italic block mt-4">
              — manifesto ciberfeminista
            </cite>
          </blockquote>
        </aside>
      </div>
    </div>
  );
}
