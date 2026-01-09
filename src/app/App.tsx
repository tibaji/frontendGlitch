import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'sonner';

// Componentes globais (não usar lazy loading)
import { Sidebar } from './components/Sidebar';
import { ScrollToTop } from './components/ScrollToTop';
import { HomeButton } from './components/HomeButton';

// Lazy loading das páginas
const Home = lazy(() => import('./pages/institucional/Home').then(m => ({ default: m.Home })));
const TarotTransexy = lazy(() => import('./pages/interacoes/TarotTransexy').then(m => ({ default: m.TarotTransexy })));
const ZineDosCiborgues = lazy(() => import('./pages/interacoes/ZineDosCiborgues').then(m => ({ default: m.ZineDosCiborgues })));
const Contato = lazy(() => import('./pages/institucional/Contato').then(m => ({ default: m.Contato })));
const Ciberespacos = lazy(() => import('./pages/institucional/Ciberespacos').then(m => ({ default: m.Ciberespacos })));
const Galeria = lazy(() => import('./pages/exposicoes/Galeria').then(m => ({ default: m.Galeria })));
const GaleriaDois = lazy(() => import('./pages/exposicoes/GaleriaDois').then(m => ({ default: m.GaleriaDois })));
const Arquivo = lazy(() => import('./pages/exposicoes/Arquivo').then(m => ({ default: m.Arquivo })));
const Equipe = lazy(() => import('./pages/comunidade/Equipe').then(m => ({ default: m.Equipe })));
const Artistas = lazy(() => import('./pages/artistas/Artistas').then(m => ({ default: m.Artistas })));
const Forums = lazy(() => import('./pages/comunidade/Forums').then(m => ({ default: m.Forums })));
const ForumThread = lazy(() => import('./pages/comunidade/ForumThread').then(m => ({ default: m.ForumThread })));

// Componente de Loading
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark">
      <div className="text-center space-y-4">
        <div className="w-12 h-12 border-4 border-neon-pink border-t-transparent rounded-full animate-spin mx-auto" />
        <p className="text-neon-blue text-sm animate-pulse">carregando...</p>
      </div>
    </div>
  );
}

// Página 404
function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cyber-dark px-4">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl md:text-8xl font-bold text-neon-pink glitch-text">404</h1>
        <h2 className="text-2xl text-neon-blue">página não encontrada</h2>
        <p className="text-neon-purple/80 text-sm">
          a página que você procura não existe no ciberespaço
        </p>
        <a 
          href="/"
          className="inline-block px-6 py-3 bg-neon-pink/20 border-2 border-neon-pink rounded-lg text-neon-pink hover:bg-neon-pink/30 transition-all"
        >
          voltar para home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <HomeButton />
      <Sidebar />
      
      {/* Conteúdo principal */}
      <div className="min-h-screen pr-0 md:pr-80">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            {/* Páginas institucionais */}
            <Route path="/" element={<Home />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/ciberespacos" element={<Ciberespacos />} />
            
            {/* Interações */}
            <Route path="/tarot" element={<TarotTransexy />} />
            <Route path="/zine" element={<ZineDosCiborgues />} />
            
            {/* Exposições */}
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/galeriadois" element={<GaleriaDois />} />
            <Route path="/arquivo" element={<Arquivo />} />
            
            {/* Comunidade */}
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/forums" element={<Forums />} />
            <Route path="/forums/:forumId" element={<ForumThread />} />
            
            {/* Artistas */}
            <Route path="/artistas" element={<Artistas />} />
            
            {/* 404 - deve ser a última rota */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      {/* Toaster com tema cyberpunk */}
      <Toaster 
        position="bottom-right"
        expand={false}
        richColors
        toastOptions={{
          duration: 4000,
          style: {
            background: '#0a0014',
            border: '2px solid #ff006e',
            color: '#00f5ff',
            backdropFilter: 'blur(8px)',
          },
          className: 'backdrop-blur-md',
        }}
      />
    </Router>
  );
}
