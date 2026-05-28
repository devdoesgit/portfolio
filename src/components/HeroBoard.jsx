import { useRef } from 'react';
import DraggablePiece from './DraggablePiece.jsx';
import { StickyNote } from './ui.jsx';
import { useHeroPositions } from '../hooks/useHeroPositions.js';
import { profile } from '../data/portfolio.js';
import BlurShimmerText from './BlurShimmerText.jsx';

function Squiggle() {
  return (
    <svg viewBox="0 0 120 48" fill="none" aria-hidden>
      <path
        d="M4 36C18 8 34 44 52 20s28-8 40 4 18 16 22 8"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function PhoneMockup({ variant }) {
  return (
    <div className="hero-phone" data-variant={variant}>
      <div className="hero-phone-notch" />
      <div className="hero-phone-screen">
        {variant === 'code' ? (
          <>
            <div className="hero-phone-bar" />
            <pre>
              <code>{`async function ship() {
  await build(api);
  return deploy();
}`}</code>
            </pre>
          </>
        ) : (
          <>
            <div className="hero-phone-stat">
              <span>API uptime</span>
              <strong>99.9%</strong>
            </div>
            <div className="hero-phone-stat">
              <span>Requests/day</span>
              <strong>2.4M</strong>
            </div>
            <div className="hero-phone-chart" />
          </>
        )}
      </div>
    </div>
  );
}

function Polaroid() {
  return (
    <div className="hero-polaroid">
      <div className="hero-polaroid-photo">
        <img src="/assests/astaa.gif" alt={`${profile.firstName} avatar`} />
      </div>
      <p>{profile.firstName} ✦</p>
    </div>
  );
}

export default function HeroBoard() {
  const boardRef = useRef(null);
  const { positions, movePiece, dragEnabled } = useHeroPositions();

const tagline = (
  <>
    Software Dev Engineer building and shipping <strong>scalable web products</strong> with attention to performance, usability, and product detail.
  </>
);

  return (
    <header className="hero" id="top">
      <div className="hero-shell">
        <div className="hero-board" ref={boardRef}>
          <div className="hero-board-grid" aria-hidden />

          <div className="hero-board-top">
            <a className="hero-brand" href="#top">
              {profile.firstName}
            </a>
            <div className="hero-board-actions">
              <a href="#contact" className="hero-btn-outline">
                Contact
              </a>
              <a href="#projects" className="hero-btn-solid">
                See My Work
              </a>
            </div>
          </div>

          <div className="hero-canvas" aria-label="Interactive portfolio canvas — drag the notes and cards">
            <DraggablePiece
              id="note-hint"
              boardRef={boardRef}
              position={positions['note-hint']}
              onMove={movePiece}
              disabled={!dragEnabled}
              className="hero-piece--hint"
            >
              <StickyNote staticNote rotate={positions['note-hint'].rotate}>
                Yes, you can move everything!
              </StickyNote>
            </DraggablePiece>

            <DraggablePiece
              id="note-a"
              boardRef={boardRef}
              position={positions['note-a']}
              onMove={movePiece}
              disabled={!dragEnabled}
            >
              <StickyNote staticNote rotate={positions['note-a'].rotate}>
                Open to freelance projects ✦
              </StickyNote>
            </DraggablePiece>

            <DraggablePiece
              id="note-b"
              boardRef={boardRef}
              position={positions['note-b']}
              onMove={movePiece}
              disabled={!dragEnabled}
            >
              <StickyNote staticNote rotate={positions['note-b'].rotate}>
                {profile.stats[2].value} hackathon wins
              </StickyNote>
            </DraggablePiece>

            <DraggablePiece
              id="note-c"
              boardRef={boardRef}
              position={positions['note-c']}
              onMove={movePiece}
              disabled={!dragEnabled}
              className="hero-piece--scroll"
            >
              <StickyNote staticNote rotate={positions['note-c'].rotate}>
                Scroll down to explore ↓
              </StickyNote>
            </DraggablePiece>

            <DraggablePiece
              id="phone-left"
              boardRef={boardRef}
              position={positions['phone-left']}
              onMove={movePiece}
              disabled={!dragEnabled}
            >
              <PhoneMockup variant="code" />
            </DraggablePiece>

            <DraggablePiece
              id="phone-right"
              boardRef={boardRef}
              position={positions['phone-right']}
              onMove={movePiece}
              disabled={!dragEnabled}
            >
              <PhoneMockup variant="dash" />
            </DraggablePiece>

            <DraggablePiece
              id="polaroid"
              boardRef={boardRef}
              position={positions.polaroid}
              onMove={movePiece}
              disabled={!dragEnabled}
            >
              <Polaroid />
            </DraggablePiece>

            <DraggablePiece
              id="squiggle-a"
              boardRef={boardRef}
              position={positions['squiggle-a']}
              onMove={movePiece}
              disabled={!dragEnabled}
              className="hero-piece--squiggle"
            >
              <Squiggle />
            </DraggablePiece>

            <DraggablePiece
              id="squiggle-b"
              boardRef={boardRef}
              position={positions['squiggle-b']}
              onMove={movePiece}
              disabled={!dragEnabled}
              className="hero-piece--squiggle hero-piece--squiggle-flip"
            >
              <Squiggle />
            </DraggablePiece>
          </div>

          <h1 className="hero-board-title">
            <span>
              <BlurShimmerText phrases={["FULL STACK DEVELOPER","BACKEND DEVELOPER"]} interval={3000} />
            </span>
          </h1>

          <p className="hero-board-tagline">{tagline}</p>

          {dragEnabled && (
            <p className="hero-drag-label" aria-hidden>
              Drag the sticky notes
            </p>
          )}
        </div>
      </div>
    </header>
  );
}
