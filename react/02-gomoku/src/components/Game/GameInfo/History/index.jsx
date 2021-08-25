import { useState } from 'react';

import { getPointByStepNumber } from '../../utils';
import './styles.scss';

function History({ history, stepNumber, setStepNumber }) {
  const [isReversed, setIsReversed] = useState(true);

  const showLocation = (index, stepNumber) => {
    const point = getPointByStepNumber(history, index);
    const location = `#${index} (${point.x + 1}, ${point.y + 1})`;

    return index === stepNumber ? `Step ${location}` : `Go to move ${location}`;
  };

  return (
    <div className="History">
      <button onClick={() => setIsReversed(prevIsReversed => !prevIsReversed)}>Reverse</button>

      <ul>
        {history.map((board, i) => {
          const index = isReversed ? history.length - 1 - i : i;

          return (
            <li
              key={index}
              style={{ fontWeight: stepNumber === index ? 'bold' : 'unset' }}
              onClick={() => {
                setStepNumber(index);
              }}
            >
              {index === 0
                ? index === stepNumber
                  ? 'Start of the game'
                  : 'Go to game start'
                : showLocation(index, stepNumber)}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default History;
