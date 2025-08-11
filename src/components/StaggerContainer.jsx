import React from 'react';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import AnimatedSection from './AnimatedSection';

const StaggerContainer = ({
  children,
  className = '',
  staggerDelay = 100,
  animationType = 'fadeUp',
}) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection
          key={index}
          animationType={animationType}
          delay={hasIntersected ? index * staggerDelay : 0}
          triggerOnce={true}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
};

export default StaggerContainer;
