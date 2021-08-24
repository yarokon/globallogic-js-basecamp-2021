import { useState, useEffect, useRef } from 'react';

const useMousePosition = () => {
  const ref = useRef(null);
  const [xy, setXY] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = ref.current;

    const { x, y } = el.getBoundingClientRect();

    const handleMouseMove = ({ clientX, clientY }) => {
      setXY({
        x: Math.round(clientX - x),
        y: Math.round(clientY - y),
      });
    };

    el.addEventListener('mousemove', handleMouseMove);

    return () => el.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return [ref, xy];
};

export default useMousePosition;
