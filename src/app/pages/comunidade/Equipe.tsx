import { Link } from 'react-router-dom';
import { membros } from '../../../data/equipe';
import { MembroCard } from '../../components/MembroCard';

export function Equipe() {
  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <header className="text-center mb-20">
          <span className="text-[#00ff41] text-sm uppercase tracking-widest mb-4 block">
            conheça
          </span>
          <h1 className="text-5xl md:text-7xl text-white glitch-text mb-6">
            nossa equipe
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto">
            uma coletiva de artistas, programadoras e ativistas dedicadas a 
            hackear o patriarcado digital
          </p>
        </header>

        {/* Grid de Membros */}
        <section 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          aria-label="Membros da equipe"
        >
          {membros.map((membro) => (
            <MembroCard key={membro.id} membro={membro} />
          ))}
        </section>

        {/* Manifesto */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-cyber-dark/50 border-2 border-neon-pink rounded-lg p-8 md:p-12 backdrop-blur-sm">
            <h2 className="text-3xl text-white mb-6 glitch-text text-center">
              nosso manifesto
            </h2>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                somos uma coletiva de criadoras e contadoras de estórias que acredita no poder transformador 
                da arte e da tecnologia. rejeitamos as narrativas dominantes que 
                tentam nos definir e construímos nossos próprios espaços digitais.
              </p>
              <p>
                aqui, o erro é estética. o glitch é manifesto. o código é político. 
                cada linha que escrevemos, cada pixel que manipulamos, é um ato de 
                resistência contra as estruturas hegemônicas.
              </p>
              <p className="text-neon-blue">
                somos ciborgues, hackers, artistas e sonhadoras de futuros impossíveis. 
                muito prazer; eu sou a nova eva. filha das travas, obra das trevas.
              </p>
            </div>

            <footer className="mt-8 pt-8 border-t border-neon-purple/30 text-center">
              <blockquote className="text-sm text-neon-purple italic">
                <p>"prefiro ser uma ciborgue a uma deusa"</p>
                <cite className="not-italic">— donna j. haraway</cite>
              </blockquote>
            </footer>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <h3 className="text-2xl text-white mb-6">
            quer fazer parte da nossa equipe?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            estamos sempre em busca de novas colaboradoras que compartilhem 
            nossa visão de um futuro digital mais justo e criativo.
          </p>
          <Link 
            to="/contato"
            className="inline-block px-8 py-4 bg-transparent border-2 border-neon-pink text-neon-pink rounded-lg hover:bg-neon-pink/20 hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-neon-pink focus:ring-offset-2 focus:ring-offset-cyber-dark"
          >
            entre em contato →
          </Link>
        </section>
      </div>
    </div>
  );
}
