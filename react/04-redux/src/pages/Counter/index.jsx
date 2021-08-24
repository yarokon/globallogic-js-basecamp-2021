import { useContext } from 'react';
import { CounterContext } from './CounterProvider';

function Counter() {
  const [count, setCount] = useContext(CounterContext);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default Counter;
