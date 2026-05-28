export function StickyNote({ children, className = '', rotate = -4, staticNote = false }) {
  return (
    <div
      className={`sticky-note ${staticNote ? 'sticky-note--static' : ''} ${className}`.trim()}
      style={{ '--note-rotate': `${rotate}deg` }}
    >
      <p>{children}</p>
    </div>
  );
}

export function SectionShell({ id, variant = 'light', children }) {
  return (
    <section id={id} className={`section section--${variant}`}>
      <div className="section-shell">
        <div className={`section-board section-board--${variant}`}>
          <div className="section-board-grid" aria-hidden />
          <div className="section-board-inner">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ number, title, count, note }) {
  return (
    <header className="section-header">
      <div className="section-header-main">
        <span className="section-num">{number}</span>
        <h2 className="section-title">{title}</h2>
        {count && <span className="section-count">{count}</span>}
      </div>
      {note && (
        <StickyNote className="section-header-note" rotate={6} staticNote>
          {note}
        </StickyNote>
      )}
    </header>
  );
}
