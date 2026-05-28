import { useEffect, useState } from 'react';

export default function BlurShimmerText({ phrases = [], interval = 3000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % phrases.length), interval);
    return () => clearInterval(id);
  }, [phrases, interval]);

  if (!phrases || phrases.length === 0) return null;

  return (
    <span className="blur-shimmer" aria-live="polite">
      <span className="blur-shimmer-text">{phrases[index]}</span>
      <span className="shimmer" aria-hidden />
    </span>
  );
}
