import { useRef } from 'react';

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function DraggablePiece({
  id,
  boardRef,
  position,
  onMove,
  className = '',
  disabled = false,
  children,
}) {
  const pieceRef = useRef(null);
  const dragRef = useRef(null);

  const endDrag = (e) => {
    if (!dragRef.current) return;
    pieceRef.current?.releasePointerCapture?.(e.pointerId);
    pieceRef.current?.classList.remove('is-dragging');
    dragRef.current = null;
  };

  const onPointerDown = (e) => {
    if (disabled || e.button !== 0) return;
    const board = boardRef.current;
    const piece = pieceRef.current;
    if (!board || !piece) return;

    piece.setPointerCapture(e.pointerId);
    const boardRect = board.getBoundingClientRect();
    const pieceRect = piece.getBoundingClientRect();

    dragRef.current = {
      pointerId: e.pointerId,
      boardRect,
      halfW: pieceRect.width / 2,
      halfH: pieceRect.height / 2,
    };
    piece.classList.add('is-dragging');
  };

  const onPointerMove = (e) => {
    if (!dragRef.current || dragRef.current.pointerId !== e.pointerId) return;

    const { boardRect, halfW, halfH } = dragRef.current;
    const centerX = e.clientX - boardRect.left;
    const centerY = e.clientY - boardRect.top;

    onMove(id, {
      x: clamp((centerX / boardRect.width) * 100, 4, 96),
      y: clamp((centerY / boardRect.height) * 100, 12, 92),
      rotate: position.rotate,
    });
  };

  return (
    <div
      ref={pieceRef}
      className={`hero-piece ${className}`.trim()}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        '--piece-rotate': `${position.rotate}deg`,
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      {children}
    </div>
  );
}
