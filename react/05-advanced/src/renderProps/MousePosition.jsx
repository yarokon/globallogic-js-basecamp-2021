import useMousePosition from '../hooks/useMousePosition';

function MousePosition({ children }) {
  const [ref, xy] = useMousePosition();

  return children(ref, xy);
}

export default MousePosition;
