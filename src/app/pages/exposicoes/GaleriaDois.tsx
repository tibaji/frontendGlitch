// src/app/pages/exposicoes/GaleriaDois.tsx
import { exposicoesAtivas } from '../../../data/exposicoes';
import { StateSection } from '../../components/StateSection';
import { Link } from 'react-router-dom';

export function GaleriaDois() {
  // Pega a segunda exposição ativa (se houver) ou a primeira
  const exposicaoAtual = exposicoesAtivas[1] || exposicoesAtivas[0];

  if (!exposicaoAtual) {
    return (
      <div className="min-h-screen bg-cyber-gradient flex items-center justify-center text-white">
        <div className="text-center space-y-4">
          <h1 className="text-4xl text-neon-purple glitch-text">
            nenhuma exposição ativa no momento
          </h1>
          <Link 
            to="/arquivo" 
            className="inline-block px-6 py-3 border-2 border-neon-pink text-neon-pink rounded-lg hover:bg-neon-pink/20 transition-all"
          >
            ver exposições passadas →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cyber-gradient text-white">
      {/* Hero minimalista */}
      <header className="w-full min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-2">
            <p className="text-neon-green text-xs uppercase tracking-[0.3em]">
              exposição atual nº2 • {exposicaoAtual.periodo}
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-9xl text-white leading-tight">
              {exposicaoAtual.titulo}
            </h1>
            {exposicaoAtual.local && (
              <h2 className="text-2xl md:text-3xl text-gray-400 italic">
                {exposicaoAtual.local}
              </h2>
            )}
          </div>
          
          <div className="max-w-2xl mx-auto space-y-4 pt-8">
            <div className="flex flex-wrap justify-center gap-2">
              {exposicaoAtual.artistas.map((artista) => (
                <span 
                  key={artista}
                  className="text-gray-300 text-lg"
                >
                  {artista}
                </span>
              ))}
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {exposicaoAtual.descricao}
            </p>
          </div>

          <div className="pt-12">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-neon-pink to-transparent mx-auto" />
          </div>
        </div>
      </header>

      {/* States - Obras da exposição */}
      {exposicaoAtual.obras.map((obra, index) => (
        <StateSection 
          key={obra.id} 
          obra={obra} 
          index={index}
          total={exposicaoAtual.obras.length}
        />
      ))}

      {/* Poema/Reflexão final */}
      <section className="w-full min-h-screen flex items-center justify-center px-8 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed italic">
            <p>existimos em múltiplos estados,</p>
            <p>talvez setenta, talvez mais,</p>
            <p>cada um é um glitch na matriz,</p>
            <p>cada um é uma rebelião.</p>
            <p className="pt-6 text-neon-green">
              não somos uma coisa só.
            </p>
            <p className="text-neon-pink">
              somos todas as coisas,
            </p>
            <p className="text-neon-blue">
              e somos livres.
            </p>
          </div>

          <div className="pt-12 space-y-4">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              {exposicaoAtual.artistas.join(' • ')} • {exposicaoAtual.periodo}
            </p>
            <p className="text-xs text-neon-purple">
              galeria_glitch
            </p>
          </div>
        </div>
      </section>

      {/* Créditos */}
      <footer className="w-full border-t border-white/10 py-12 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs">
                artistas
              </p>
              <p className="text-white">
                {exposicaoAtual.artistas.join(', ')}
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs">
                conceito
              </p>
              <p className="text-white">
                {exposicaoAtual.descricao}
              </p>
            </div>
            <div>
              <p className="text-gray-500 mb-2 uppercase tracking-wider text-xs">
                duração
              </p>
              <p className="text-white">
                {exposicaoAtual.periodo}
              </p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <Link 
              to="/galeria"
              className="text-neon-pink hover:text-neon-blue transition-colors text-sm"
            >
              ← ver outra exposição
            </Link>
            <Link 
              to="/arquivo" 
              className="text-gray-400 hover:text-neon-pink transition-colors text-sm"
            >
              ver exposições passadas →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
