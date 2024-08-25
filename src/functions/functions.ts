import { Player } from "../interfaces/playInterfaces";

export const calculateWinner = (squares: Player[]): Player | null => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a];
    }
  }
  return null;
};

export const findBestMove = (board: Player[]): number | null => {
  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const newBoard = board.slice();
      newBoard[i] = "O";
      if (calculateWinner(newBoard) === "O") {
        return i;
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      const newBoard = board.slice();
      newBoard[i] = "X";
      if (calculateWinner(newBoard) === "X") {
        return i;
      }
    }
  }

  const availableMoves = board
    .map((value, index) => (value === null ? index : null))
    .filter((value) => value !== null);
  if (availableMoves.length > 0) {
    return availableMoves[
      Math.floor(Math.random() * availableMoves.length)
    ] as number;
  }

  return null;
};
