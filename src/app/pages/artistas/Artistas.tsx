// src/pages/artistas/Artistas.tsx
import { ExternalLink } from 'lucide-react';
import { artistas } from '../../../data/artistas';

export function Artistas() {
  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-neon-purple glitch-text mb-4">
            artistas
          </h1>
          <p className="text-neon-orange text-xl">
            criadoras ciberfeministas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {artistas.map((artista) => (
            <div 
              key={artista.id}
              className="group cursor-pointer"
            >
              <div className="aspect-square rounded-lg overflow-hidden border-2 border-neon-blue hover:border-neon-pink transition-all mb-4 relative">
                <img 
                  src={artista.imagem}
                  alt={`Foto de ${artista.nome}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <h3 className="text-xl text-neon-pink mb-1">{artista.nome}</h3>
              <p className="text-neon-purple text-sm">{artista.especialidade}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://forms.gle/FXtdBRiygf2EYxfh8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-neon-orange text-neon-orange rounded-lg hover:bg-neon-orange/20 transition-all"
          >
            <span>submeter seu portfólio</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
