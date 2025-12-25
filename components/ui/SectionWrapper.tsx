import React, { useEffect, useRef, useState } from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  className = '',
  delay = 0,
  animation = 'fadeSlideIn 1s ease-out both'
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -10% 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const delaySeconds = delay / 1000;
  const style: React.CSSProperties = {
    animation: `${animation}`,
    animationDelay: `${delaySeconds}s`,
  };

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isVisible ? 'animate' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};