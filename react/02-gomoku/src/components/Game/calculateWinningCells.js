import { getPointByStepNumber, getCell } from './utils';
import { WINNING_LINE_SIZE } from './constants';

const calculateWinningCells = (history, stepNumber) => {
  if (stepNumber === 0) {
    return new Set();
  }

  const board = history[stepNumber];
  const point = getPointByStepNumber(history, stepNumber);
  const cell = getCell(board, point);

  const vectors = [
    [0, 1], // DOWN
    [1, 1], // DOWN RIGHT
    [1, 0], // RIGHT
    [1, -1], // UP RIGHT
  ];

  const winningCells = vectors.flatMap(vector => {
    const getWinningLine = (point, vector, winningLine = []) => {
      const nextPoint = point.getNextPoint(vector);
      const nextCell = getCell(board, nextPoint);

      if (cell === nextCell) {
        return getWinningLine(nextPoint, vector, [...winningLine, nextPoint]);
      } else {
        return winningLine;
      }
    };

    const invertedVector = [-vector[0], -vector[1]];
    const winningLine1 = getWinningLine(point, vector);
    const winningLine2 = getWinningLine(point, invertedVector);
    const winningLine = [...winningLine1, point, ...winningLine2];

    return winningLine.length >= WINNING_LINE_SIZE ? winningLine : [];
  });

  return new Set(winningCells.map(point => point.toString()));
};

export default calculateWinningCells;
