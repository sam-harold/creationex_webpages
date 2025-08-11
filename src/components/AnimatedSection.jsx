import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AnimatedSection = ({
  children,
  className = '',
  animationType = 'fadeUp',
  delay = 0,
  triggerOnce = true,
}) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const base = 'transition-all duration-1000 ease-out';

  const getAnimationClasses = () => {
    const show = hasIntersected || !triggerOnce;

    switch (animationType) {
      case 'fadeUp':
        return `${base} ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
      case 'fadeIn':
        return `${base} ${show ? 'opacity-100' : 'opacity-0'}`;
      case 'slideLeft':
        return `${base} ${show ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`;
      case 'slideRight':
        return `${base} ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`;
      case 'scale':
        return `${base} ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`;
      case 'rotate':
        return `${base} ${show ? 'opacity-100 rotate-0' : 'opacity-0 rotate-3'}`;
      default:
        return base;
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        willChange: 'transform, opacity',
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
