import useMousePosition from '../../hooks/useMousePosition';
import MousePosition from '../../renderProps/MousePosition';
import withMousePosition from '../../HOCs/withMousePosition';
import Box from './Box';
import './index.scss';

const BoxWithMouseCords = withMousePosition(Box);

function ReusingLogic() {
  const [ref, { x, y }] = useMousePosition();

  return (
    <div className="ReusingLogic">
      <Box ref={ref} x={x} y={y}>
        Hooks
      </Box>

      <MousePosition>
        {(ref, { x, y }) => (
          <Box ref={ref} x={x} y={y}>
            Render Props
          </Box>
        )}
      </MousePosition>

      <BoxWithMouseCords>Higher-Order Components</BoxWithMouseCords>
    </div>
  );
}

export default ReusingLogic;
