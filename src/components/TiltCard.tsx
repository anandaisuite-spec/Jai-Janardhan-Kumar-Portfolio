import { ReactNode } from 'react';
import { useTilt } from '../hooks/useTilt';
import { useReveal } from '../hooks/useReveal';

export default function TiltCard({
  children,
  className = '',
  max = 10,
  reveal = true,
  rotateReveal = false,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  reveal?: boolean;
  rotateReveal?: boolean;
}) {
  const tiltRef = useTilt<HTMLDivElement>(max, 1.01);
  const revealRef = useReveal<HTMLDivElement>();

  const setRef = (el: HTMLDivElement | null) => {
    tiltRef.current = el;
    if (reveal) revealRef.current = el;
  };

  const revealClass = reveal ? (rotateReveal ? 'reveal-rotate' : 'reveal') : '';

  return (
    <div ref={setRef} className={`tilt-card ${revealClass} ${className}`}>
      {children}
    </div>
  );
}
