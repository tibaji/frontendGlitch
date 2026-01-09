// src/app/pages/Home.tsx (versão com carrossel)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { secoesHome } from '../../../data/home';
import { CardHome } from '../../components/CardHome';
import 'swiper/css';
import 'swiper/css/effect-fade';

export function Home() {
  return (
    <div className="min-h-screen w-full bg-cyber-gradient text-white">
      {/* Hero com Carrossel */}
      <section className="w-full pt-32 pb-20 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-6xl md:text-8xl text-neon-pink glitch-text mb-6">
              galeria_glitch
            </h1>
            <p className="text-neon-blue text-xl md:text-2xl neon-glow mb-2">
              espaço ciberfeminista de arte
            </p>
            <p className="text-neon-purple/80">
              surfe nosso website ↓
            </p>
          </header>
          
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            allowTouchMove={true}
            className="w-full overflow-visible"
          >
            {secoesHome.map((secaoDestaque) => (
              <SwiperSlide key={secaoDestaque.id} className="overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                  {/* Card Grande (destaque do slide) */}
                  <CardHome secao={secaoDestaque} tamanho="grande" />
                  
                  {/* Cards Pequenos (outros) */}
                  {secoesHome
                    .filter(s => s.id !== secaoDestaque.id)
                    .slice(0, 5)
                    .map((secao) => (
                      <CardHome key={secao.id} secao={secao} tamanho="pequeno" />
                    ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-32 px-8 md:px-16 lg:px-24 bg-cyber-dark/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-5xl text-neon-orange glitch-text lg:sticky lg:top-24">
              sobre nós
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <p className="text-xl leading-relaxed text-neon-blue/90">
              a galeria_glitch é um espaço digital dedicado à arte ciberfeminista, 
              onde exploramos as intersecções entre tecnologia, feminismo e expressão artística.
            </p>
            
            <blockquote className="border-l-4 border-neon-pink rounded-r-lg pl-6 py-4 bg-cyber-dark/50">
              <p className="text-lg leading-relaxed text-neon-purple/90 italic">
                nosso objetivo é criar um ambiente virtual seguro e inclusivo para 
                artistas que questionam as normas de gênero através da arte e da tecnologia.
              </p>
            </blockquote>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="space-y-2 p-4 bg-cyber-dark/30 rounded-lg border border-neon-pink/30">
                <p className="text-neon-pink text-sm uppercase tracking-wider font-bold">
                  arte glitch
                </p>
                <p className="text-neon-blue/60 text-xs">
                  estética do erro digital
                </p>
              </div>
              <div className="space-y-2 p-4 bg-cyber-dark/30 rounded-lg border border-neon-purple/30">
                <p className="text-neon-purple text-sm uppercase tracking-wider font-bold">
                  ciberfeminismo
                </p>
                <p className="text-neon-blue/60 text-xs">
                  tecnologia + feminismo
                </p>
              </div>
              <div className="space-y-2 p-4 bg-cyber-dark/30 rounded-lg border border-neon-orange/30">
                <p className="text-neon-orange text-sm uppercase tracking-wider font-bold">
                  cultura digital
                </p>
                <p className="text-neon-blue/60 text-xs">
                  expressão contemporânea
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
