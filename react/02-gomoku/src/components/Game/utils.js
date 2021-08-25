import { RED, GREEN, EMPTY } from './constants';

export const createBoard = size =>
  Array.from({ length: size }, () => Array.from({ length: size }, () => EMPTY));

export class Point {
  static isEqual(p1, p2) {
    return p1.x === p2.x && p1.y === p2.y;
  }

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  getNextPoint(vector) {
    const x = this.x + vector[0];
    const y = this.y + vector[1];

    return new Point(x, y);
  }

  toString() {
    return `${this.x}${this.y}`;
  }
}

export const getCell = (board, point) => board[point.y]?.[point.x];

export const updateBoard = (board, point, player) =>
  board.map((row, y) =>
    row.map((cell, x) => (Point.isEqual(point, new Point(x, y)) ? player : cell))
  );

const isEven = n => n % 2 === 0;

export const getNextPlayer = stepNumber => (isEven(stepNumber) ? RED : GREEN);

export const getPointByStepNumber = (history, stepNumber) => {
  if (stepNumber === 0) {
    return null;
  }

  const prevBoard = history[stepNumber - 1];
  const board = history[stepNumber];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[y].length; x++) {
      const point = new Point(x, y);

      if (getCell(prevBoard, point) !== getCell(board, point)) {
        return point;
      }
    }
  }
};
