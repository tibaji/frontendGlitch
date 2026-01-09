// src/app/pages/interacoes/ZineDosCiborgues.tsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import { Download } from 'lucide-react';
import { paginasZine, infoZine } from '../../../data/zine';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export function ZineDosCiborgues() {
  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-neon-purple glitch-text mb-4">
            {infoZine.titulo}
          </h1>
          <p className="text-neon-orange text-xl">
            {infoZine.subtitulo}
          </p>
        </header>

        {/* Imagem Destaque */}
        <section className="mb-16">
          <div className="aspect-video rounded-lg overflow-hidden border-2 border-neon-orange">
            <img 
              src={infoZine.imagemCapa}
              alt={`Capa do ${infoZine.titulo}`}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-center text-neon-blue text-sm">
            {infoZine.descricao}
          </p>
        </section>

        {/* Carrossel */}
        <section 
          className="mb-20 relative flex justify-center overflow-visible"
          aria-label="Prévia das páginas do zine"
        >
          <div className="w-full max-w-5xl overflow-visible">
            <h2 className="text-3xl text-neon-blue mb-8 glitch-text">
              um gostinho
            </h2>
            
            <Swiper
              modules={[Navigation, Pagination, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              slidesPerView="auto"
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              navigation
              pagination={{ clickable: true, dynamicBullets: true }}
              className="zine-swiper overflow-visible"
            >
              {paginasZine.map((page) => (
                <SwiperSlide 
                  key={page.id} 
                  className="!w-96 overflow-visible"
                >
                  <article className="aspect-[3/4] bg-cyber-dark border-2 border-neon-purple rounded-lg p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl text-neon-orange mb-6 glitch-text">
                        {page.titulo}
                      </h3>
                      <p className="text-neon-blue text-lg leading-relaxed">
                        {page.conteudo}
                      </p>
                    </div>
                    <p className="text-neon-purple/60 text-xs mt-4">
                      página {page.id} de {paginasZine.length}
                    </p>
                  </article>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Download */}
        <section className="bg-cyber-dark/50 border-2 border-neon-blue rounded-lg p-8 backdrop-blur-sm text-center">
          <h3 className="text-2xl text-neon-pink mb-4">
            baixe o zine completo
          </h3>
          <p className="text-neon-purple mb-6">
            disponível em PDF para download gratuito
          </p>
          <a 
            href={infoZine.linkDownload}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border-2 border-neon-orange text-neon-orange px-8 py-3 rounded-lg hover:bg-neon-orange/20 hover:scale-105 transition-all"
          >
            <Download className="w-5 h-5" aria-hidden="true" />
            <span>baixar pdf completo</span>
          </a>
          
          <p className="text-neon-blue/60 text-xs mt-4">
            licença:{' '}
            <a
              href={infoZine.linkLicenca}
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              {infoZine.licenca}
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
