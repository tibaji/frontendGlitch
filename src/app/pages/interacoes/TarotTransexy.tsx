// src/app/pages/interacoes/TarotTransexy.tsx
import { RefreshCw } from 'lucide-react';
import { cartasTarot } from '../../../data/tarot';
import { useTarotShuffle } from '../../../hooks/useTarotShuffle';
import { CartaTarot } from '../../components/CartaTarot';
import { DetalhesCarta } from '../../components/DetalhesCarta';

export function TarotTransexy() {
  const {
    shuffledCards,
    isShuffling,
    selectedCard,
    shuffleKey,
    handleShuffle,
    handleCardClick
  } = useTarotShuffle(cartasTarot);

  const cartaSelecionada = shuffledCards.find(c => c.id === selectedCard);

  return (
    <div className="min-h-screen bg-cyber-gradient text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl text-neon-pink glitch-text mb-4">
            tarot transexy
          </h1>
          <p className="text-neon-blue text-xl mb-8">
            clique em uma carta para revelar sua mensagem
          </p>
          
          <button
            onClick={handleShuffle}
            disabled={isShuffling}
            className="px-6 py-3 bg-transparent border-2 border-neon-purple text-neon-purple rounded-lg hover:border-neon-pink hover:text-neon-pink transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 mx-auto"
            aria-label={isShuffling ? 'Embaralhando cartas' : 'Embaralhar cartas'}
          >
            <RefreshCw className={`w-5 h-5 ${isShuffling ? 'animate-spin' : ''}`} aria-hidden="true" />
            {isShuffling ? 'embaralhando...' : 'embaralhar cartas'}
          </button>
        </header>

        {/* Grid de Cartas */}
        <section 
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12"
          aria-label="Cartas do tarot"
        >
          {shuffledCards.map((carta, index) => (
            <CartaTarot
              key={`${carta.id}-${shuffleKey}`}
              carta={carta}
              index={index}
              isSelected={selectedCard === carta.id}
              isShuffling={isShuffling}
              shuffleKey={shuffleKey}
              onClick={handleCardClick}
            />
          ))}
        </section>

        {/* Detalhes da Carta Selecionada */}
        {cartaSelecionada && (
          <DetalhesCarta carta={cartaSelecionada} />
        )}
      </div>
    </div>
  );
}
