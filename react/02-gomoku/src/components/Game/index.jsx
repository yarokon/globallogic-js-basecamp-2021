import { useState } from 'react';

import Board from './Board';
import GameInfo from './GameInfo';
import { createBoard, getCell, getNextPlayer, updateBoard } from './utils';
import calculateWinningCells from './calculateWinningCells';
import { EMPTY } from './constants';
import './styles.scss';

function Game({ size }) {
  const [history, setHistory] = useState(() => [createBoard(size)]);
  const [stepNumber, setStepNumber] = useState(0);

  const board = history[stepNumber];
  const nextPlayer = getNextPlayer(stepNumber);

  const winningCells = calculateWinningCells(history, stepNumber);
  const winner = winningCells.size ? nextPlayer : EMPTY;

  const handleClick = point => {
    if (getCell(board, point) === EMPTY && !winner) {
      setHistory(prevHistory => [
        ...prevHistory.slice(0, stepNumber + 1),
        updateBoard(board, point, nextPlayer),
      ]);

      setStepNumber(prevStepNumber => prevStepNumber + 1);
    }
  };

  return (
    <div className="Game">
      <Board board={board} winningCells={winningCells} onClick={handleClick} />

      <GameInfo
        winner={winner}
        size={size}
        history={history}
        stepNumber={stepNumber}
        setStepNumber={setStepNumber}
      />
    </div>
  );
}

export default Game;
