// src/hooks/useTarotShuffle.ts
import { useState, useMemo } from 'react';
import { CartaTarot } from '../data/tarot';

export function useTarotShuffle(cartas: CartaTarot[]) {
  const [shuffleKey, setShuffleKey] = useState(0);
  const [isShuffling, setIsShuffling] = useState(false);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const shuffledCards = useMemo(() => {
    return [...cartas].sort(() => Math.random() - 0.5);
  }, [shuffleKey, cartas]);

  const handleShuffle = () => {
    setIsShuffling(true);
    setSelectedCard(null);
    
    setTimeout(() => {
      setShuffleKey(prev => prev + 1);
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardClick = (id: number) => {
    if (isShuffling) return;
    setSelectedCard(selectedCard === id ? null : id);
  };

  return {
    shuffledCards,
    isShuffling,
    selectedCard,
    shuffleKey,
    handleShuffle,
    handleCardClick
  };
}
