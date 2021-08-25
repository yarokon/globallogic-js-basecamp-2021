import { Point } from '../utils';
import Circle from './Circle';
import './styles.scss';

function Board({ board, onClick, winningCells }) {
  const handleClick = point => {
    onClick(point);
  };

  return (
    <div className="Board">
      {board.map((row, y) => (
        <div className="row" key={y}>
          {row.map((cell, x) => {
            const point = new Point(x, y);

            return (
              <Circle
                key={x}
                cell={cell}
                isWinner={winningCells.has(point.toString())}
                onClick={() => handleClick(point)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
