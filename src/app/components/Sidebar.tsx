import { Link, useLocation } from 'react-router-dom';
import { Star, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { path: '/', label: 'home', subtitle: 'página inicial' },
    { path: '/tarot', label: 'tarot transexy', subtitle: 'tire uma carta' },
    { path: '/zine', label: 'zine dos ciborgues', subtitle: 'fanzine cibernética' },
    { path: '/contato', label: 'contato', subtitle: 'mande uma mensagem' },
    { path: '/ciberespacos', label: 'ciberespaços', subtitle: 'alguns links!' }
  ];

  // Fechar menu ao pressionar ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  // Prevenir scroll do body quando menu aberto em mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Fechar menu ao mudar de rota
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleToggleMenu = () => setIsOpen(!isOpen);
  const handleCloseMenu = () => setIsOpen(false);

  // Classes reutilizáveis
  const buttonBaseClasses = "fixed z-50 p-3 bg-cyber-dark/90 border-2 border-neon-pink rounded-lg backdrop-blur-sm transition-all hover:bg-neon-pink/20";
  const sidebarBaseClasses = "fixed right-0 bg-cyber-dark/95 backdrop-blur-md border-2 border-neon-pink shadow-2xl shadow-neon-pink/20 p-6 z-40 transition-all duration-300 ease-in-out";

  return (
    <>
      {/* Botão hamburger - Mobile */}
      <button
        onClick={handleToggleMenu}
        className={`${buttonBaseClasses} top-6 right-6 md:hidden`}
        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-neon-pink" />
        ) : (
          <Menu className="w-6 h-6 text-neon-pink" />
        )}
      </button>

      {/* Sidebar informativa - Desktop */}
      <aside 
        className={`fixed right-0 top-0 bottom-0 w-64 bg-cyber-dark/80 backdrop-blur-sm border-l-2 border-neon-purple z-30 transition-all duration-300 flex-col items-center justify-center px-6 py-20 hidden md:flex ${
          isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
        aria-hidden={isOpen}
      >
        <div className="space-y-8 text-center">
          {/* ASCII art clicável */}
          <button
            onClick={handleToggleMenu}
            className="group mb-4 transition-transform hover:scale-110"
            aria-label="Abrir menu de navegação"
          >
            <pre className="text-neon-pink group-hover:text-neon-orange transition-colors text-xs leading-none animate-pulse font-mono">
{`  ___________
 |.----------.| 
 ||          || 
 ||  >_      || 
 ||          || 
 |'----------'| 
  )__________(
  |__________|`}
            </pre>
            <h3 className="text-neon-pink text-sm font-bold mt-3 group-hover:text-neon-orange transition-colors">
              ⏾⋆.˚galeria_glitch˙⋆✮
            </h3>
            <p className="text-neon-pink text-xs mt-3 group-hover:text-neon-orange transition-colors">
              clique para abrir o menu
            </p>
          </button>

          <div className="border-t border-neon-pink/20 pt-6 mt-6" />
          
          <blockquote className="space-y-2">
            <p className="text-neon-orange text-xs italic leading-relaxed">
              "na tradição utópica de se imaginar um mundo sem gênero, que será talvez um mundo sem gênese, mas, talvez, também, um mundo sem fim"
            </p>
            <cite className="text-neon-blue text-xs not-italic">
              — donna j. haraway
            </cite>
          </blockquote>
        </div>
      </aside>

      {/* Sidebar principal - Navegação */}
      <nav 
        className={`${sidebarBaseClasses} top-0 w-80 h-full overflow-y-auto md:right-4 md:top-1/2 md:-translate-y-1/2 md:rounded-xl md:h-auto md:max-h-[90vh] ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Menu principal"
      >
        <header className="mb-6">
          <h2 className="text-neon-pink glitch-text text-2xl mb-1">
            galeria_glitch
          </h2>
          <p className="text-neon-blue text-sm">bem vinde!</p>
        </header>

        <ul className="space-y-3">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={handleCloseMenu}
                  className={`block group p-3 rounded-lg transition-all ${
                    isActive 
                      ? 'bg-neon-pink/20 border border-neon-pink' 
                      : 'hover:bg-neon-blue/10 border border-transparent hover:border-neon-blue/30'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <div className="flex items-start gap-3">
                    <Star 
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 transition-colors ${
                        isActive ? 'text-neon-pink' : 'text-neon-blue group-hover:text-neon-pink'
                      }`}
                      fill={isActive ? 'currentColor' : 'none'}
                      aria-hidden="true"
                    />
                    <div>
                      <div className={`font-medium transition-colors ${
                        isActive ? 'text-neon-pink' : 'text-neon-blue group-hover:text-neon-pink'
                      }`}>
                        {item.label}
                      </div>
                      <div className="text-neon-purple/60 text-xs mt-0.5">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        <footer className="mt-8 pt-6 border-t border-neon-purple/30">
          <p className="text-neon-orange text-xs text-center leading-relaxed">
            desenvolvido por{' '}
            <a 
              href="https://www.linkedin.com/in/tibaji/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-neon-pink transition-colors underline focus:outline-none focus:ring-2 focus:ring-neon-pink rounded"
            >
              tibaji
            </a>
            {' '}| 2026
          </p>
        </footer>
      </nav>

      {/* Overlay */}
      {isOpen && (
        <div 
          onClick={handleCloseMenu}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:backdrop-blur-none"
          aria-hidden="true"
        />
      )}
    </>
  );
}
