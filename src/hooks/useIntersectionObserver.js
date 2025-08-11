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
      if (entry.isIntersecting && !hasIntersected) {
        setHasIntersected(true);
      }
    }, memoizedOptions);

    const currentRef = ref.current;
    if (currentRef) observer.observe(currentRef);

    return () => observer.disconnect(); // cleaner
  }, [hasIntersected, memoizedOptions]);

  return { ref, isIntersecting, hasIntersected };
};

export default useIntersectionObserver;
