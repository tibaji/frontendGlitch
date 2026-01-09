import { Link, useLocation } from 'react-router-dom';
import { Home } from 'lucide-react';

export function HomeButton() {
  const location = useLocation();
  
  // Não mostrar o botão se já estiver na home
  if (location.pathname === '/') return null;

  return (
    <Link
      to="/"
      className="group fixed top-4 left-4 md:top-6 md:left-6 z-50 p-2 md:p-3 bg-black/30 backdrop-blur-md border-2 border-neon-pink rounded-lg hover:bg-neon-pink/20 hover:scale-110 transition-all duration-300 shadow-lg shadow-neon-pink/20"
      title="voltar ao início"
      aria-label="voltar para página inicial"
    >
      <Home className="w-5 h-5 text-neon-pink group-hover:text-neon-blue transition-colors duration-300" />
    </Link>
  );
}
