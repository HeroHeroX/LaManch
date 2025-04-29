import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

const SmoothScroll = () => {
  const location = useLocation();
  
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.07,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default SmoothScroll;
