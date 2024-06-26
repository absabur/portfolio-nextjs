import { useState, useEffect } from 'react';

const usePageMetrics = () => {
  const [pageHeight, setPageHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [innerHeight, setinnerHeight] = useState(0);

  useEffect(() => {
    const updateMetrics = () => {
      setPageHeight(document.documentElement.scrollHeight);
      setScrollY(window.scrollY);
      setinnerHeight(window.innerHeight);
    };

    updateMetrics();

    window.addEventListener('resize', updateMetrics);
    window.addEventListener('scroll', updateMetrics);
    window.addEventListener('load', updateMetrics);

    return () => {
      window.removeEventListener('resize', updateMetrics);
      window.removeEventListener('scroll', updateMetrics);
      window.removeEventListener('load', updateMetrics);
    };
  }, []);
  const scrollbarWidth = (scrollY / (pageHeight - innerHeight)) * 100;
  return { scrollbarWidth };
};

export default usePageMetrics;
