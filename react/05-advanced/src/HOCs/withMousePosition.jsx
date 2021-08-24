import useMousePosition from '../hooks/useMousePosition';
// import MousePosition from '../renderProps/MousePosition';

const withMousePosition = WrappedComponent => props => {
  const [ref, xy] = useMousePosition();

  return <WrappedComponent ref={ref} {...xy} {...props} />;
};

// const withMousePosition = WrappedComponent => props =>
//   <MousePosition>{(ref, xy) => <WrappedComponent ref={ref} {...xy} {...props} />}</MousePosition>;

export default withMousePosition;
