import { useState, useEffect } from 'react';

const useViewport = () => {
  const [size, setSize] = useState({ x: 0, y: 0 });

  const handleResize = () => {
    setSize({x: window.innerWidth, y: window.innerHeight});
    console.log('handle resize');
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    console.log('addEventListener');

    return () => {
      window.removeEventListener('resize', handleResize);
      console.log('removeEventListener');
    }
  }, []);

  return size;
}

export { useViewport };
