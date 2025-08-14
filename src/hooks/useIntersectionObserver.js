import { useState, useEffect, useRef, useMemo } from 'react';

const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef(null);

  const memoizedOptions = useMemo(
    () => ({
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    }),
    [options]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      if (entry.isIntersecting) {
        setHasIntersected(true);
      } else {
        setHasIntersected(false); // reset to allow re-animation
      }
    }, memoizedOptions);

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
      observer.disconnect();
    };
  }, [memoizedOptions]);

  return { ref, isIntersecting, hasIntersected };
};

export default useIntersectionObserver;
