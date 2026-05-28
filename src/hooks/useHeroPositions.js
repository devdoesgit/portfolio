import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'devesh-portfolio-hero-positions';

export const HERO_PIECES_DEFAULT = {
  'note-a': { x: 14, y: 22, rotate: -7 },
  'note-b': { x: 86, y: 18, rotate: 5 },
  'note-c': { x: 16, y: 78, rotate: -4 },
  'note-hint': { x: 72, y: 10, rotate: 4 },
  'phone-left': { x: 10, y: 48, rotate: -14 },
  'phone-right': { x: 90, y: 42, rotate: 11 },
  polaroid: { x: 50, y: 66, rotate: 4 },
  'squiggle-a': { x: 30, y: 56, rotate: -8 },
  'squiggle-b': { x: 70, y: 52, rotate: 12 },
};

function loadPositions() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return { ...HERO_PIECES_DEFAULT, ...JSON.parse(saved) };
    }
  } catch {
    /* ignore */
  }
  return { ...HERO_PIECES_DEFAULT };
}

export function useHeroPositions() {
  const [positions, setPositions] = useState(loadPositions);
  const [dragEnabled, setDragEnabled] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)');
    const update = () => setDragEnabled(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const movePiece = useCallback((id, next) => {
    setPositions((prev) => {
      const merged = {
        ...prev,
        [id]: {
          ...prev[id],
          ...next,
        },
      };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      } catch {
        /* ignore */
      }
      return merged;
    });
  }, []);

  return { positions, movePiece, dragEnabled };
}
