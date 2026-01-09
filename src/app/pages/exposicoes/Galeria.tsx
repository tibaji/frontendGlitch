// src/app/pages/exposicoes/Galeria.tsx
import { exposicoesAtivas } from '../../../data/exposicoes';
import { ObraDestaque } from '../../components/ObraDestaque';
import { GridObras } from '../../components/GridObras';
import { Link } from 'react-router-dom';


export function Galeria() {
  // Pega a primeira exposição ativa
  const exposicaoAtual = exposicoesAtivas[0];


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


  const primeiraObra = exposicaoAtual.obras[0];
  const segundaObra = exposicaoAtual.obras[1];
  const terceiraObra = exposicaoAtual.obras[2];


  return (
    <div className="min-h-screen bg-cyber-gradient text-white">
      {/* Hero Section */}
      <header className="w-full px-8 md:px-16 lg:px-24 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-4">
            <span className="text-neon-green text-sm uppercase tracking-widest">
              exposição atual nº1
            </span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white glitch-text mb-6 leading-tight">
            {exposicaoAtual.titulo}
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 text-white">
            <p className="text-xl">{exposicaoAtual.descricao}</p>
            <span className="hidden md:block text-neon-purple" aria-hidden="true">•</span>
            <p className="text-neon-purple">{exposicaoAtual.periodo}</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {exposicaoAtual.artistas.map((artista) => (
              <span 
                key={artista}
                className="text-sm px-4 py-2 border border-neon-blue text-neon-blue rounded-full"
              >
                {artista}
              </span>
            ))}
          </div>
        </div>
      </header>


      {/* Obra 1 - Grande com texto */}
      {primeiraObra && (
        <ObraDestaque obra={primeiraObra} layout="direita" />
      )}


      {/* Obra 2 - Grid */}
      {terceiraObra && (
        <GridObras
          titulo={terceiraObra.titulo}
          descricao={terceiraObra.descricao}
          ano={terceiraObra.ano.toString()}
          numeroObras={9}
        />
      )}


      {/* Obra 3 - Texto grande com imagem */}
      {segundaObra && (
        <div className="w-full px-8 md:px-16 lg:px-24 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-5">
                <div className="aspect-[3/4] border-2 border-neon-green rounded-lg overflow-hidden lg:sticky lg:top-24">
                  <img 
                    src={segundaObra.imagem}
                    alt={segundaObra.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>


              <div className="lg:col-span-7 space-y-8">
                <h2 className="text-5xl md:text-6xl text-white leading-tight">
                  {segundaObra.titulo}
                </h2>
                
                <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                  <p>{segundaObra.descricao}</p>
                </div>


                <div className="pt-8 border-t border-neon-purple/30">
                  <p className="text-neon-green text-sm">
                    {segundaObra.ano} • {segundaObra.tecnica}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Todas as obras em lista */}
      <section className="w-full px-8 md:px-16 lg:px-24 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-white mb-12">todas as obras</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exposicaoAtual.obras.map((obra) => (
              <article key={obra.id} className="group">
                <div className="aspect-[4/5] border-2 border-neon-purple/30 rounded-lg overflow-hidden group-hover:border-neon-pink transition-all mb-4">
                  <img 
                    src={obra.imagem}
                    alt={obra.titulo}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl text-white mb-2">{obra.titulo}</h3>
                <p className="text-gray-400 text-sm mb-2">{obra.descricao}</p>
                <p className="text-neon-green text-xs">
                  {obra.artista} • {obra.ano}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>


      {/* Informações da exposição */}
      <aside className="w-full px-8 md:px-16 lg:px-24 py-32 bg-cyber-dark/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-2">
              <h3 className="text-neon-green text-sm uppercase tracking-wider">
                exposição
              </h3>
              <p className="text-white text-2xl">
                {exposicaoAtual.titulo}
              </p>
            </div>


            <div className="md:col-span-2 space-y-6 text-gray-300 leading-relaxed">
              <p>{exposicaoAtual.descricao}</p>
              {exposicaoAtual.local && <p>Local: {exposicaoAtual.local}</p>}
              {exposicaoAtual.horario && <p>Horário: {exposicaoAtual.horario}</p>}
              <div className="pt-6 border-t border-neon-purple/30">
                <p className="text-neon-green text-sm">
                  {exposicaoAtual.periodo} • {exposicaoAtual.obras.length} obras
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>


      {/* Footer com navegação entre galerias */}
      <footer className="w-full px-8 md:px-16 lg:px-24 py-12 border-t border-neon-purple/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
            <p>galeria_glitch © 2026</p>
            <div className="flex items-center gap-6">
              <Link 
                to="/galeriadois"
                className="text-neon-pink hover:text-neon-blue transition-colors"
              >
                ver outra exposição →
              </Link>
              <Link 
                to="/arquivo" 
                className="hover:text-neon-pink transition-colors"
              >
                exposições passadas
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
