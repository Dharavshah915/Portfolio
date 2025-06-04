import React, { useRef, useState } from 'react';

interface SpotlightBorderProps {
  children: React.ReactNode;
  className?: string;
}

export const SpotlightBorder: React.FC<SpotlightBorderProps> = ({
  children,
  className,
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = wrapperRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative overflow-hidden ${className ?? ''}`}
    >
      {/* Glowing Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-500 ease-in-out fade-in-50"
        style={{
          border: '2.5px solid rgb(88, 66, 234)',
          borderRadius: '12px',
          opacity,
          WebkitMaskImage: `radial-gradient(70% 600px at ${position.x}px ${position.y}px, black 20%, transparent)`,
        }}
      />
      {children}
    </div>
  );
};
